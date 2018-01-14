<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('authorId')->unsigned();
            $table->integer('subjectId')->unsigned();
            $table->integer('questionsCount')->unsigned();
            $table->timestamps();

            $table->foreign('authorId')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');

            $table->foreign('subjectId')
                  ->references('id')
                  ->on('subjects')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tests', function (Blueprint $table) {
            $table->dropForeign(['authorId']);
            $table->dropForeign(['subjectId']);
        });
        Schema::dropIfExists('tests');
    }
}
