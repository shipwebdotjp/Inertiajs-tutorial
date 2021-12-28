<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class BookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bookmarks')->insert([
            [
                'title' => 'SOHO MIND',
                'url' => 'https://blog.shipweb.jp/',
            ],
            [
                'title' => 'どこかにアンテナ',
                'url' => 'https://ant.shipweb.jp/',
            ],
        ]);
    }
}
