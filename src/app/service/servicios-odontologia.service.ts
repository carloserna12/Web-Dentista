import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, deleteDoc, getDoc,query, where,getDocs } from '@firebase/firestore';
import { Observable } from 'rxjs';
import TratamientosInterfaz from '../interfaces/tratamientos.inteface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosOdontologiaService {

  constructor(private firestore:Firestore) {}

  addTratamiento(tratamiento:TratamientosInterfaz){
    const tratamientoRef = collection(this.firestore,'tratamientos');
    return addDoc(tratamientoRef,tratamiento);
  }

  getTratamiento():Observable<TratamientosInterfaz[]>{
    const tratamientoRef = collection(this.firestore,'tratamientos');
    return collectionData(tratamientoRef,{idField:'id'})as Observable<TratamientosInterfaz[]>;
  }

  async deleteTratamiento(nombre: string){
    const tratamientosRef = collection(this.firestore, 'tratamientos');
    const querys = query(tratamientosRef, where("name", "==", nombre));
    const querySnapshot = await getDocs(querys);
    if (querySnapshot.empty) {
      console.log('No se encontraron documentos que coincidan con la consulta.');
    } else {
        console.log('Se encontraron los siguientes documentos:');
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    const docId = querySnapshot.docs[0].id; // asumiendo que solo se encontró un documento
    const tratamientoRef = doc(this.firestore, `tratamientos/${docId}`);
    const response = await deleteDoc(tratamientoRef);
    console.log(response);
  }
}
