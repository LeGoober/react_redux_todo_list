import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Add Task
export const addTaskToFirebase = async (task) => {
  const docRef = await addDoc(collection(db, "tasks"), task);
  return { ...task, id: docRef.id };
};

// Read Tasks
export const getTasksFromFirebase = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update Task
export const updateTaskInFirebase = async (task) => {
  const taskRef = doc(db, "tasks", task.id);
  await updateDoc(taskRef, task);
};

// Delete Task
export const deleteTaskFromFirebase = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};
