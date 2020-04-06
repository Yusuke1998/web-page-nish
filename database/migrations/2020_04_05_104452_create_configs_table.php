<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigsTable extends Migration
{
    public function up()
    {
        Schema::create('configs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title_web')
                        ->default('title_web');
            $table->string('subtitle_web')
                        ->nullable()
                        ->default('subtitle_web');
            $table->string('img_parallax')
                        ->default('img_parallax.jpg');
            $table->string('title_parallax')
                        ->default('title_parallax');
            $table->string('subtitle_parallax')
                        ->nullable()
                        ->default('subtitle_parallax');
            $table->string('text_parallax')
                        ->nullable()
                        ->default('text_parallax');
            $table->string('text_footer')
                        ->default('text_footer');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('configs');
    }
}
