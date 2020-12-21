import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import List from '@editorjs/list';
import Embed from '@editorjs/embed'

import './editor.less';

export default function Editor() {
    let editor = null;
    useEffect(() => {
        editor = new EditorJS({
            holder: 'editorjs',
            placeholder: 'Click here and start typing.',
            tools: {
                header: {
                    class: Header,
                    config: {
                        levels: [2, 3],
                        defaultLevel: 2,
                        placeholder: 'Enter a header'
                    }
                },
                image: {
                    class: SimpleImage
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                  },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true
                        }
                    }
                }
            },
            data: {
                time: 1608198410556,
                blocks: [
                    {
                        type: 'header',
                        data: {
                            text: 'Привет.',
                            level: 2
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Я кратко объясню тебе, как пользоваться нашим редактором.'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Любая статья состоит из блоков. Нажимая на блок, ты можешь манипулировать им с помощью меню справа (иконка с 4 точками).'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Создать новый блок можно просто кликнув в пустую область снизу (или Enter при редактировании). Затем, ты можешь нажать + и выбрать какой тип блока создать. Ну, например, заголовок.'
                        }
                    },
                    {
                        type: 'header',
                        data: {
                            text: 'У нас два типа заголовков',
                            level: 2
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'А именно H2 и H3. Изменить тип заголовка можно в том же меню справа. Можешь попробовать на заголовке выше.'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Кстати. Выделив обычный текст курсором мыши, ты можешь конвертировать его в заголовок. Сделай текст снизу заголовком.'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Я хочу стать заголовком'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Хочешь сделать отступ побольше? Просто добавь пустой параграф и будет норм.'
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: ''
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'А если хочешь вставить картинку, то, будь любезен сначала загрузить ее в какой-нить клауд. Да-а, места на сервере-то у нас немного. А вот как загрузишь, то смело вставляй ссылку в новый параграф. Все само заведётся. Отвечаю.'
                        }
                    },
                    {
                        "type" : "image",
                        "data" : {
                            "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
                            "caption" : "Красная машинка (эт описание, его необязательно вставлять)",
                            "withBorder" : false,
                            "withBackground" : false,
                            "stretched" : false
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: ''
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Точно также, просто вставив ссылку с YouTube, можно добавить и видео. '
                        }
                    },
                    {
                        type: 'embed', 
                        data: {
                            caption: "",
                            embed: "https://www.youtube.com/embed/YZNearcOsXg",
                            height: 320,
                            service: "youtube",
                            source: "https://www.youtube.com/watch?v=YZNearcOsXg",
                            width: 580
                        }
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Ну, а с остальным, думаю, разберешься сам. Не оч трудно.<br /><br />Бывай.'
                        }
                    },
                ]
            }
        })
    }, [])

    function clearEditor() {
        // console.log(editor.save());
        let shouldDelete = confirm('Вы действительно хотите очистить статью?');
        if (shouldDelete) editor.clear();
    }

    return(
        <div className="blog-editor">
            <div className="blog-editor--container">
                <h1 className="mainheader">Новая статья</h1>
                <div className="editor-settings">
                    <div className="article-title-desc">
                        <div className={"input"}>
                            <span>Название статьи <font color="red">*</font></span>
                            <input type="text" name={'article-title'} value={''} />
                        </div>
                        <div className="input">
                            <span>Краткое описание (показывается на странице Blog, 1 - 2 предл.) <font color="red">*</font></span>
                            <textarea name={'article-description'} value={''}></textarea>
                        </div>
                    </div>
                    <div className="article-actions">
                        <p>Перед публикацией прочтите статью еще раз. На текущий момент, у нас нет возможности редактирования.<br/><br/>Первая картинка в статье становится оболжкой. Если в статье нет картинок, то установится стандартная обложка.</p>
                        <div className="buttons">
                            <div className="action-button-orange grey" onClick={clearEditor}>Очистить статью</div>
                            <div className="action-button-orange">Опубликовать</div>
                        </div>
                    </div>
                </div>
                <div id="editorjs"></div>
            </div>
        </div>
    )
}