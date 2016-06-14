package it.ildoc.taskit;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Date;

public class TaskListActivity extends AppCompatActivity {

    private static final int EDIT_TASK_REQUEST = 10;
    private static final int CREATE_TASK_REQUEST = 20;

    private ArrayList<Task> tasks;
    private int lastPositionClicked;
    private TaskAdapter taskAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_task_list);

        tasks = new ArrayList<Task>();
        tasks.add(new Task());
        tasks.get(0).setName("Task 1");
        tasks.get(0).setDueDate(new Date());
        tasks.add(new Task());
        tasks.get(1).setName("Task 2");
        tasks.get(1).setDone(true);
        tasks.add(new Task());
        tasks.get(2).setName("Task 3");

        ListView listView = (ListView) findViewById(R.id.task_list);
        taskAdapter = new TaskAdapter(tasks);
        listView.setAdapter(taskAdapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                lastPositionClicked = position;
                Intent i = new Intent(TaskListActivity.this, TaskActivity.class);
                Task task = (Task) parent.getAdapter().getItem(position);
                i.putExtra(TaskActivity.EXTRA, task);
                startActivityForResult(i, EDIT_TASK_REQUEST);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case EDIT_TASK_REQUEST:
                if (resultCode == RESULT_OK) {
                    Task task = (Task) data.getSerializableExtra(TaskActivity.EXTRA);
                    tasks.set(lastPositionClicked, task);
                    taskAdapter.notifyDataSetChanged();
                }
                break;

            case CREATE_TASK_REQUEST:
                if (resultCode == RESULT_OK) {
                    Task task = (Task) data.getSerializableExtra(TaskActivity.EXTRA);
                    tasks.add(task);
                    taskAdapter.notifyDataSetChanged();
                }
                break;
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_task_list, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.add_task) {
            Intent i = new Intent(TaskListActivity.this, TaskActivity.class);
            startActivityForResult(i, CREATE_TASK_REQUEST);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    private class TaskAdapter extends ArrayAdapter<Task> {
        TaskAdapter(ArrayList<Task> tasks) {
            super(TaskListActivity.this, R.layout.task_list_row, R.id.task_item_name, tasks);
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            convertView = super.getView(position, convertView, parent);
            Task task = getItem(position);
            TextView taskName = (TextView) convertView.findViewById(R.id.task_item_name);
            taskName.setText(task.getName());

            CheckBox doneBox = (CheckBox) convertView.findViewById(R.id.task_item_done);
            doneBox.setChecked(task.isDone());

            return convertView;
        }
    }
}
