import { addDoc, collection, updateDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure correct import

// Function to add task
const addTaskToFirebase = async (task) => {
  await addDoc(collection(db, "tasks"), task);
};

// Function to get tasks
const getTasksFromFirebase = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// Function to update task
const updateTaskInFirebase = async (task) => {
  const taskRef = doc(db, "tasks", task.id);
  await updateDoc(taskRef, task);
};

// Function to delete task
const deleteTaskFromFirebase = async (id) => {
  const taskRef = doc(db, "tasks", id);
  await deleteDoc(taskRef);
};

// Export functions
export { addTaskToFirebase, getTasksFromFirebase, updateTaskInFirebase, deleteTaskFromFirebase };
