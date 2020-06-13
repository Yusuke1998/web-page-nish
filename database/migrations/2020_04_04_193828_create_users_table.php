<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {

    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->string('password');
            $table->timestamp('email_verified_at')
                ->nullable();
            $table->rememberToken();
            $table->timestamps();
                
            $table->enum('status', ['active', 'inactive'])
                ->default('active');
            $table->enum('rol', ['admin', 'user'])
                ->default('user');
            $table->string('photo')
                ->nullable();
            $table->integer('person_id')
                ->unsigned()
                ->references('id')
                ->on('people')
                ->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('users');
    }
}
