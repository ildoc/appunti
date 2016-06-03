package it.ildoc.mybank;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    EditText amountInput;
    Button withdrawButton;
    Button depositButton;
    TextView amountDisplay;
    BankAccount currentAccount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        amountDisplay = (TextView)findViewById(R.id.balance_display);
        withdrawButton = (Button)findViewById(R.id.withdraw_button);
        depositButton = (Button)findViewById(R.id.deposit_button);
        amountInput = (EditText)findViewById(R.id.amount_input);

        currentAccount = new BankAccount(BankAccount.Type.CHECKING);

        withdrawButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String amount = amountInput.getText().toString();
                currentAccount.deposit(Double.parseDouble(amount));
                amountDisplay.setText("Balance is: " + currentAccount.getBalance());
            }
        });

        depositButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String amount = amountInput.getText().toString();
                currentAccount.withDraw(Double.parseDouble(amount));
                amountDisplay.setText("Balance is: " + currentAccount.getBalance());
            }
        });
    }
}
