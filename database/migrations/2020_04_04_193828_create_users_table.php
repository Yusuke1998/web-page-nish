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
            $table->timestamp('email_verified_at')
                ->nullable();
            $table->string('password');
            $table->enum('rol', ['admin', 'user'])
                ->default('user');
            $table->integer('person_id')
                ->unsigned()
                ->references('id')
                ->on('people')
                ->onDelete('cascade');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('users');
    }
}
