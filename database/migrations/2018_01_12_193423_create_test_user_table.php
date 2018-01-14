<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_user', function (Blueprint $table) {
            $table->integer('testId')->unsigned();
            $table->integer('userId')->unsigned();
            $table->integer('status');
            // Here should be max score, user score and percentage, but I'll implement it as Eloquent scopes
            $table->timestamps();

            $table->foreign('testId')
                  ->references('id')
                  ->on('tests')
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
            $table->dropForeign(['testId']);
        });
        Schema::dropIfExists('test_user');
    }
}
