package it.ildoc.accounts;

import java.util.ArrayList;

/**
 * Created by filippo on 02/06/16.
 */
public abstract class BankAccount {
    private ArrayList<Double> transactions;
    public static final double overdraftFee = 30;

    BankAccount() {
        transactions = new ArrayList<Double>();
    }

    private Type type;

    public enum Type {
        SAVINGS, CHECKING
    }

    public void withDraw(double amount) {
        transactions.add(-amount);

        if (getBalance() < 0)
            transactions.add(-overdraftFee);
    }

    protected int numberOfWithdraws() {
        int count = 0;
        for (double t : transactions) {
            if (t < 0) count++;
        }
        return count;
    }

    public void deposit(double amount) {
        transactions.add(amount);
    }

    public double getBalance() {
        double total = 0;
        for (double transaction : transactions)
            total += transaction;
        return total;
    }
}
