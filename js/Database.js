;(function() {
    'use strict';

    let database = {
        idCounter: 2,
        problems: [
                {
                id: 1,
                title: 'Post title',
                content: 'Post content',
                points: 0,
                viewsNumber: 10,
                badges: ['js', 'javaScript'],
                comments: [
                    {
                        id: 1,
                        content: 'Comment content'
                    },
                    {
                        id: 1,
                        content: 'Comment-2 content'
                    }
                ]    

            },

            {id: 2,
                title: 'Инициализация внутри if',
                content: 'В 17 стандарте появилась возможность инициализировать переменную внутри условия if (init; condition) Значит я могу сделать так  if(int i =12; d < i){} или так if(int i,b = 10; i == b) {} Но как проинициализировать некоторое количество переменных разных типов?',
                points: 0,
                viewsNumber: 5,
                badges: ['js', 'javaScript'],
                comments: [
                    {
                        id: 2,
                        content: `Воспользуйтесь структурой, например:
                        <pre>
                        if (struct { int i; double d; } x = {5, 4.5}; x.i > 5 && x.d < 4)
                        {
                        }
                        </pre>
                        `
                    }
                ]
            },

            {id: 3,
                title: 'Объединение многомерных массивов',
                content: `Есть массив
                <pre>
                $arr1[] = array("id"=>"1", "count"=>"0", "otd"=>"south");
                $arr1[] = array("id"=>"2", "count"=>"4", "otd"=>"north");
                $arr1[] = array("id"=>"3", "count"=>"8", "otd"=>"south");
                
                и второй массив:

                $arr2[] = array("id"=>"1", "count"=>"1", "otd"=>"south");
                $arr2[] = array("id"=>"2", "count"=>"3", "otd"=>"north");
                $arr2[] = array("id"=>"3", "count"=>"5", "otd"=>"south");
                </pre>
                У условных пользователей в этом массивe совпадают id, но count разный. Как можно сделать третий массив результирующий?(Суммируются count) Я пробовал при помощи array_merge, но второй массив просто дозаписывался в конец
                
                <pre>
                arr3[1] => Array
                    (
                        [id] => 1
                        [count] => 1   //0+1
                        [otd] => south
                    )

                arr3[2] => Array
                    (
                        [id] => 2
                        [count] => 7    //3+4
                        [otd] => north
                    )

                arr3[3] => Array
                    (
                        [id] => 3
                        [count] => 13    //5+8
                        [otd] => south
                    )
                </pre>
                И вот еще, что интересно. Если переименую второй ключ в массиве и массивы будут такими:
                <pre>
                $arr1[] = array("id"=>"1", "count"=>"0", "otd"=>"south");
                $arr1[] = array("id"=>"2", "count"=>"4", "otd"=>"north"); 
                $arr1[] = array("id"=>"3", "count"=>"8", "otd"=>"south");

                $arr2[] = array("id"=>"1", "not_count"=>"1", "otd"=>"south");
                $arr2[] = array("id"=>"2", "not_count"=>"3", "otd"=>"north");
                $arr2[] = array("id"=>"3", "not_count"=>"5", "otd"=>"south");
                </pre>

                Как можно получить массив такого вида?
                <pre>
                arr3[1] => Array
                (
                    [id] => 1
                    [count] => 0  
                    [otd] => south
                    [not_count] => 1
                )
                arr3[2] => Array
                        (
                            [id] => 2
                            [count] => 3   
                            [otd] => north
                            [not_count] => 4
                        )

                arr3[3] => Array
                        (
                            [id] => 3
                            [count] => 5 
                            [otd] => south
                            [not_count] => 8
                        )
                </pre>

                Пробовал сделать слияние, но [not_count] записывался поверх [count] первого массива с новым значением

                `,
                points: 0,
                viewsNumber: 15,
                badges: ['js', 'javaScript'],
                comments: [
                    {
                        id: 3,
                        content: `
                        <pre>
                        <?php
                        $arr1= array(array("id"=>"1", "count"=>"0", "otd"=>"south"),
                        array("id"=>"2", "count"=>"4", "otd"=>"north"),
                        array("id"=>"3", "count"=>"8", "otd"=>"south"));
                        $arr2 = array(array("id"=>"1", "count"=>"1", "otd"=>"south"),
                        array("id"=>"2", "count"=>"3", "otd"=>"north"),
                        array("id"=>"3", "count"=>"5", "otd"=>"south"));
                        
                        foreach ($arr1 as $key => $value) {
                            # code...
                            foreach ($arr2 as $key1 => $value1) {
                                # code...
                                if($value['id']==$value1['id']){
                                $data[]=array('id'=>$value['id'], 'count'=>$value['count']+$value1['count'], 'otd'=>$value['otd']); 
                                }
                            }
                        }
                        
                        print_r($data);
                        
                        ?>
                        </pre>`
                    }
                ]
            },

            {
                id: 4,
                title: 'Добавление картинок. attr, jquery',
                content: `Всем привет. Никак не поддается. В arr приходит массив из 20 объектов. Нужно добавить 20 картинок с 20 уникальными src. Но получается, что ко всем добавляется последняя ссылка. Я так понимаю, теряется контекст? Как исправить?
                <pre>
                function addPics(arr) {

                    arr.then(data => {
                        $(".divPic").append("<img>");
                        $("img").attr("src", data[0].url);
                });
                </pre>
                `,
                points: 0,
                viewsNumber: 20,
                badges: ['js', 'javaScript'],
                comments: [
                    {
                        id: 4,
                        content: `Вот это
                        <pre>
                        $("img").attr("src", data[0].url);
                        </pre>
                        устанавливает атрибут src всем сразу картинкам на странице.
                        
                        Замените Ваши две строчки на:
                        <pre>
                        $("<img />").attr("src", data[0].url).appendTo(".divPic");
                        </pre>
                        `
                    }
                ]    

            }

        ]
    };

    load();

    const Database = {};

    Database.getProblems = function getProblems () {
        return JSON.parse(JSON.stringify(database.problems));
    };

    Database.addProblem = function addProblem(title, content) {
        database.problems.push({
            id: database.idCounter,
            title: title,
            content: content,
            points: 0,
            comments: []
        });
        database.idCounter++;

        save();
    };

    window.Database = Database;

    function save() {
        localStorage.setItem('db', JSON.stringify(database));
    }

    function load() {
        const jsonString = localStorage.getItem('db');
        if (jsonString) {
            database = JSON.parse(jsonString);
        }
    }
})();