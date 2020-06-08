<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLandingPagesTable extends Migration
{
    public function up()
    {
        Schema::create('landing_pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->json('customs')
                ->nullable();
            $table->json('blogs')
                ->nullable();
            $table->json('querys')
                ->nullable();
            $table->json('services')
                ->nullable();
            $table->boolean('active')
                ->default(true);
            $table->string('type');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('landing_page');
    }
}
