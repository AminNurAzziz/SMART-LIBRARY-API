<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservasi', function (Blueprint $table) {
            $table->id();
            $table->string('kode_reservasi')->unique();
            $table->string('nim');
            $table->foreign('nim')->references('nim')->on('students');
            $table->date('tanggal_reservasi')->timestamp();
            $table->date('tanggal_ambil')->nullable();
            $table->enum('status', ['menunggu', 'menunggu konfirmasi', 'diterima', 'gagal'])->default('menunggu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservasi');
    }
};
