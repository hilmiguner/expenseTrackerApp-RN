import { StyleSheet, Text, TextInput, View } from "react-native";

import { useContext, useLayoutEffect } from "react";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({ navigation, route }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if(isEditing) {
            expensesCtx.updateExpense(editedExpenseId, {description: "test !!!", amount: 29.99, date: new Date("2022-05-20")});
        }
        else {
            expensesCtx.addExpense({description: "test", amount: 19.99, date: new Date("2022-05-19")});
        }
        navigation.goBack();
    }

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode="flat" onPress={cancelHandler} style={styles.button }>Cancel</Button>
                <Button onPress={confirmHandler} style={styles.button}>{isEditing ? "Update" : "Add"}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
                </View>
            )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});