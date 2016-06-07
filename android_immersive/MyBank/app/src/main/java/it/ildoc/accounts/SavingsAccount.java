package it.ildoc.accounts;

/**
 * Created by f.giomi on 07/06/2016.
 */
public class SavingsAccount extends BankAccount {

    @Override
    public void withDraw(double amount) {
        if (numberOfWithdraws() >= 3)
            return;
        super.withDraw(amount);
    }
}
