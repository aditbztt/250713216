
<?php
require_once 'koneksi.php';

if (!isset($_GET['id']) || !ctype_digit($_GET['id']) || $_GET['id'] === '0') {
    die("ID tidak valid. <a href='index.php'>Kembali</a>");
}

$id = (int) $_GET['id'];

$query = "DELETE FROM mahasiswa WHERE id = ?";
$stmt = mysqli_prepare($conn, $query);

if (!$stmt) {
    die("Gagal menyiapkan query: " . mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "i", $id);

if (mysqli_stmt_execute($stmt)) {
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "Data mahasiswa berhasil dihapus.";
    } else {
        echo "Data mahasiswa tidak ditemukan.";
    }
} else {
    echo "Gagal menghapus data: " . mysqli_stmt_error($stmt);
}

mysqli_stmt_close($stmt);

echo "<br><a href='index.php'>Kembali ke halaman utama</a>";
?>
