<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration {

    public function up() {
        Schema::create('people', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('identity');
            $table->string('address')
                ->nullable();
            $table->string('phone')
                ->nullable();
            $table->string('genere')
                ->nullable();
            $table->string('country')
                ->default('venezuela');
            $table->string('state')
                ->nullable();
            $table->string('manicipality')
                ->nullable();
            $table->string('city')
                ->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('people');
    }
}
