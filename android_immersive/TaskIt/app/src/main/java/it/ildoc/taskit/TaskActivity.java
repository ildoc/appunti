package it.ildoc.taskit;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.DatePicker;
import android.widget.EditText;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

public class TaskActivity extends AppCompatActivity {

    public static final String EXTRA = "EXTRA";
    private Calendar cal;
    private Task task;
    private Button dateButton;
    private EditText taskNameInput;
    private CheckBox doneBox;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_task);

        task = (Task) getIntent().getSerializableExtra(EXTRA);
        if(task == null){
            task = new Task();
        }

        cal = Calendar.getInstance();

        taskNameInput = (EditText) findViewById(R.id.task_name);
        dateButton = (Button) findViewById(R.id.task_date);
        doneBox = (CheckBox) findViewById(R.id.task_done);
        Button saveButton = (Button) findViewById(R.id.save_button);

        taskNameInput.setText(task.getName());
        if (task.getDueDate() == null) {
            cal.setTime(new Date());
            dateButton.setText(getResources().getString(R.string.no_date));
        } else {
            cal.setTime(task.getDueDate());
            updateButton();
        }
        doneBox.setChecked(task.isDone());

        dateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatePickerDialog dpd = new DatePickerDialog(TaskActivity.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                        cal.set(Calendar.YEAR, year);
                        cal.set(Calendar.MONTH, monthOfYear);
                        cal.set(Calendar.DAY_OF_MONTH, dayOfMonth);

                        updateButton();
                    }
                }, cal.get(Calendar.YEAR), cal.get(Calendar.MONTH), cal.get(Calendar.DAY_OF_MONTH));

                dpd.show();
            }
        });

        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                task.setName(taskNameInput.getText().toString());
                task.setDone(doneBox.isChecked());
                task.setDueDate(cal.getTime());

                Intent i = new Intent();
                i.putExtra(EXTRA, task);
                setResult(RESULT_OK, i);
                finish();
            }
        });
    }

    private void updateButton(){
        DateFormat df = DateFormat.getDateInstance();
        dateButton.setText(df.format(cal.getTime()));
    }
}
