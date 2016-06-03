package it.ildoc.mybank;

import java.util.ArrayList;

/**
 * Created by filippo on 02/06/16.
 */
public class BankAccount {
    private ArrayList<Double> transactions;
    public static final double overdraftFee = 30;

    BankAccount(Type type)
    {
        transactions = new ArrayList<Double>();
        type = type;
    }

    private Type type;
    public enum Type {
        SAVINGS, CHECKING
    }

    public void withDraw(double amount){
        transactions.add(-amount);
        if (getBalance() < 0)
            transactions.add(-overdraftFee);
    }

    public void deposit(double amount){
        transactions.add(amount);
    }

    public double getBalance(){
        double total = 0;
        for(double transaction:transactions)
            total+=transaction;
        return total;
    }
}
