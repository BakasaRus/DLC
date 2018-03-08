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
            $table->integer('test_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('status');
            $table->integer('points')->default(0);
            $table->integer('max_points')->default(0);
            $table->timestamps();

            $table->foreign('test_id')
                  ->references('id')
                  ->on('tests')
                  ->onDelete('cascade');

            $table->foreign('user_id')
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
            $table->dropForeign(['user_id']);
            $table->dropForeign(['test_id']);
        });
        Schema::dropIfExists('test_user');
    }
}
