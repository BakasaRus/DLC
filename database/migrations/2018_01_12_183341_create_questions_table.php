<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('id');
            $table->text('body');
            $table->string('answer');
            $table->integer('test_id')->unsigned();
            $table->integer('author_id')->unsigned();
            $table->integer('points')->unsigned();
            $table->timestamps();

            $table->foreign('test_id')
                  ->references('id')
                  ->on('tests')
                  ->onDelete('cascade');

            $table->foreign('author_id')
                  ->references('id')
                  ->on('users')
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
            $table->dropForeign(['test_id']);
            $table->dropForeign(['author_id']);
        });
        Schema::dropIfExists('questions');
    }
}
