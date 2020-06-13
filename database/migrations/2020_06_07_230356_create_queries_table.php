<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQueriesTable extends Migration
{
    public function up()
    {
        Schema::create('queries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 30);
            $table->string('email', 30);
            $table->string('phone1', 30);
            $table->string('phone2', 30)
                ->nullable();
            $table->string('address', 200);
            $table->text('content');
            $table->enum('state', ['pending','ok'])
                ->default('pending');
            $table->string('images')
                ->nullable();
            $table->integer('user_id')
                ->unsigned()
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('querys');
    }
}
