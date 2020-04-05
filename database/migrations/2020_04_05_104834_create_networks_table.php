<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNetworksTable extends Migration
{
    public function up()
    {
        Schema::create('networks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('url');
            $table->string('description')->nullable();
            $table->unsignedBigInteger('config_id');
            $table->foreign('config_id')
                    ->references('id')
                    ->on('configs');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('networks');
    }
}
