<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuerysTable extends Migration
{
    public function up()
    {
        Schema::create('querys', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('state', ['pending','ok'])
                ->default('pending');
            $table->text('content');
            $table->string('img')
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
