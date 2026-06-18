import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, Firestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

export interface UsuarioAuth {
  uid: string;
  email: string;
  nombre: string;
  rol: 'Administrador' | 'Entrenador' | 'Deportista';
}

const app = initializeApp(environment.firebase);

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = getAuth(app);
  private firestore: Firestore = getFirestore(app);
  private router = inject(Router);

  private _usuario = signal<UsuarioAuth | null>(null);
  private _cargando = signal(true);

  readonly usuario = this._usuario.asReadonly();
  readonly cargando = this._cargando.asReadonly();

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        await this.cargarPerfil(user);
      } else {
        this._usuario.set(null);
      }
      this._cargando.set(false);
    });
  }

  private async cargarPerfil(user: User): Promise<void> {
    try {
      const docRef = doc(this.firestore, 'perfiles', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        this._usuario.set({
          uid: user.uid,
          email: user.email ?? '',
          nombre: data['nombre'] ?? '',
          rol: data['rol'] as UsuarioAuth['rol'],
        });
      }
    } catch {
      this._usuario.set(null);
    }
  }

  async login(email: string, password: string): Promise<void> {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    await this.cargarPerfil(cred.user);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this._usuario.set(null);
    this.router.navigate(['/login']);
  }
}
