import axios from "axios";

const BACKEND_URL = "https://react-native-firebase-6caa6-default-rtdb.europe-west1.firebasedatabaseapp";

export async function storeExpense(expenseData) {
    const respond = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
    const id = respond.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(
        BACKEND_URL + "/expenses.json"
    );
    
    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };

        expenses.push(expenseObj);
    }

    return expenses;
}

export function updateExpense(id, updatedExpenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, updatedExpenseData);
}

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}