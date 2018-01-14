<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestQuestionsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('testQuestions', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('questionId')->unsigned();
			$table->integer('testId')->unsigned();
			$table->integer('points')->unsigned();
			$table->integer('availableCount')->unsigned()->nullable();
			$table->timestamps();

			$table->foreign('questionId')
				  ->references('id')
				  ->on('questions')
				  ->onDelete('cascade');

			$table->foreign('testId')
				  ->references('id')
				  ->on('tests')
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
        Schema::table('testQuestions', function (Blueprint $table) {
            $table->dropForeign(['questionId']);
            $table->dropForeign(['testId']);
        });
		Schema::dropIfExists('testQuestions');
	}
}
