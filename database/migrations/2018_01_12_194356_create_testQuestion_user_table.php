<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestQuestionUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testQuestion_user', function (Blueprint $table) {
            $table->integer('testQuestionId')->unsigned();
            $table->integer('userId')->unsigned();
            $table->string('answer');
            $table->timestamps();

            $table->foreign('testQuestionId')
                  ->references('id')
                  ->on('testQuestions')
                  ->onDelete('cascade');

            $table->foreign('userId')
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
        Schema::table('test_user', function (Blueprint $table) {
            $table->dropForeign(['userId']);
            $table->dropForeign(['testQuestionId']);
        });
        Schema::dropIfExists('testQuestion_user');
    }
}
