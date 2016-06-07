package it.ildoc.signupform;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class LoginActivity extends AppCompatActivity {

    Button submitButton;
    EditText usernameInput;
    EditText passwordInput;
    EditText confirmInput;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        submitButton = (Button) findViewById(R.id.submit_button);
        usernameInput = (EditText) findViewById(R.id.username_edittext);
        passwordInput = (EditText) findViewById(R.id.password_edittext);
        confirmInput = (EditText) findViewById(R.id.confirm_edittext);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = usernameInput.getText().toString();
                String password = passwordInput.getText().toString();
                String confirm = confirmInput.getText().toString();

                if (password.equals(confirm)) {
                    User newUser = new User(username, password);

                    Intent i = new Intent(LoginActivity.this, HomeActivity.class);
                    i.putExtra(HomeActivity.EXTRA, newUser);
                    startActivity(i);
                }
            }
        });
    }
}
