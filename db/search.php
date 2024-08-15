<?php
// Connect to the database
$conn = new SQLite3('./projekte.db');

// Check connection
if (!$conn) {
    die("Connection failed: " . $conn->lastErrorMsg());
}

// Perform a query
$result = $conn->query("SELECT * FROM projects");

// Query to retrieve data with IDs 1-4
$query = "SELECT * FROM projekte WHERE id IN (1, 2, 3, 4)";
$result = mysqli_query($conn, $query);

// Check if query was successful
if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

// Fetch data and store in an array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[$row['id']] = $row;
}

// Close the connection
$conn->close();

// Loop through the data and insert into corresponding containers
foreach ($data as $id => $row) {
    $containerId = "container-$id";
    $checkboxContainerId = "checkbox-container-$id";
    
    // Insert data into <p> container
    echo "<script>document.getElementById('$containerId').innerHTML = '$row[your_column_name]';</script>";
    
    // Insert data into checkbox container
    echo "<script>document.getElementById('$checkboxContainerId').innerHTML = '<input type=\"checkbox\" value=\"$row[your_column_name]\">';</script>";
}
