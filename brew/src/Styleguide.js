import React, {Component} from 'react';
import './styleguide.less';

import UnityPrefabIcon from './assets/imgs/UnityPrefabIcon.png';
import Container from "./components/UIKit/Container/Container";
import Title from "./components/UIKit/Title/Title";
import DropDownButton from "./components/UIKit/Title/DropDownButton";
import Input from './components/UIKit/Input/Input';
import Separator from "./components/UIKit/Separator/Separator";
import Button from "./components/UIKit/Button/Button";
import Example from "./components/UIKit/Example/Example";
import Prefab from "./components/UIKit/Example/Prefab";
import NavLink from "./components/UIKit/NavLink";
import Switch from "./components/UIKit/Switch/Switch";

class Styleguide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'intro',
            isLogotype: false
        };

        this.changeTab = this.changeTab.bind(this);
        this.toggleLogo = this.toggleLogo.bind(this);
    }

    changeTab(newTab) {
        this.setState({
            activeTab: newTab
        });
    }

    toggleLogo() {
        this.setState((prevState) => {
            return {
                isLogotype: !prevState.isLogotype
            }
        })
    }

    render() {
        return (
            <div>
                {/* Header */}

                <div className="st-header">
                    <div className="st-header--content">
                        <div className="st-logo">
                            <div>
                                <svg width="25" height="28" viewBox="0 0 25 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2125 11.0644H12.9215C13.1971 11.0644 13.4615 11.1689 13.6564 11.3549C13.8513 11.5409 13.9608 11.7932 13.9608 12.0563V13.6873H11.2125V11.0644Z"
                                        fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M6.83025 28V6.51028H16.3568C16.8389 6.51101 17.3011 6.69411 17.642 7.01946C17.9829 7.34481 18.1748 7.78588 18.1755 8.24599V18.1257H13.9001L18.1697 28H25V4.58172C25.0008 3.36778 24.4964 2.20323 23.5978 1.34407C22.6992 0.484909 21.4798 0.0014606 20.2079 0H0V28H6.83025Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <div className={'logo-title'}>Native Robotics</div>
                        </div>
                    </div>
                </div>

                {/* Page */}

                <div className="st-page">

                    {/* Left-Side Navigation */}

                    <div className="st-menu">
                        <NavLink activeTab={this.state.activeTab} hash={'intro'}
                                 onNavigate={this.changeTab}>Intro</NavLink>
                        <NavLink activeTab={this.state.activeTab} hash={'container'}
                                 onNavigate={this.changeTab}>Container</NavLink>
                        <NavLink activeTab={this.state.activeTab} hash={'group'}
                                 onNavigate={this.changeTab}>Group</NavLink>
                        <NavLink activeTab={this.state.activeTab} hash={'title'}
                                 onNavigate={this.changeTab}>Title</NavLink>
                        <NavLink activeTab={this.state.activeTab} hash={'titleDropDown'}
                                 onNavigate={this.changeTab}>TitleDropDown</NavLink>
                        <NavLink activeTab={this.state.activeTab} hash={'titleSwitch'}
                                 onNavigate={this.changeTab}>TitleSwitch</NavLink>
                    </div>

                    {/* Content */}

                    <div className="st-content">
                        <div id={"intro"} className="st-content--section">
                            <h1 className="st-mainTitle">OmniKit UI Styleguide</h1>
                            <p className="st-mainText">Приложение OmniKit состоит из множества экранов, которые несут в
                                себе разный функционал. Каждый экран полон интерактивных элементов, призывающих
                                пользователя к взаимодействию с ними: кнопки, слайдеры, тогглы и так далее. Новый
                                функционал зачастую требует новых элементов для управления этим функционалом. В OmniKit
                                UI Styleguide мы расскажем, как быстро и правильно собрать собственный пользовательский
                                интерфейс, полностью готовый к публикации.</p>

                        </div>

                        <div id={"container"} className="st-content--section">
                            <h1 className="st-content--section-title">Container</h1>
                            <p className="st-mainText">
                                Главным UI-элементом в приложении OmniKit является контейнер. Всего
                                существует два вида контейнеров: основной и дополнительный. Первый вид размещается на
                                главных экранах приложения (например, Box Settings). Второй контейнер обычно
                                встречается в модальных окнах.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }
                                description={'Меню настройки короба, с помощью Container.'}>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>
                                        Box Transforms
                                    </Title>
                                    <Input label={'Width'} placeholder={'100'}/>
                                    <Input label={'Length'} placeholder={'200'}/>
                                    <Input label={'Height'} placeholder={'120'}/>
                                    <Button label={'Continue'}/>
                                </Container>
                            </Example>
                        </div>

                        <div id={"group"} className="st-content--section">
                            <h1 className="st-content--section-title">Group</h1>
                            <p className="st-mainText">
                                Не смотря на авторитарность контейнеров, не стоит размещать другие <br/>UI-элементы
                                внутри
                                него самостоятельно. Лучше объединять их в смысловые группы, с помощью компонента Group.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }
                                description={'Разделяем размеры короба и его вес с помощью Group.'}>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>
                                        Box Transforms
                                    </Title>
                                    <Input label={'Width'} placeholder={'100'}/>
                                    <Input label={'Length'} placeholder={'200'}/>
                                    <Input label={'Height'} placeholder={'120'}/>
                                    <Title after={<DropDownButton label={'gr'}/>}>
                                        Box Weight
                                    </Title>
                                    <Input placeholder={'340'}/>
                                    <Button label={'Continue'}/>
                                </Container>
                            </Example>
                        </div>

                        <div id={"title"} className="st-content--section">
                            <h1 className="st-content--section-title">Title</h1>
                            <p className="st-mainText">
                                Этот компонент обычно используется в начале группы. Его задача: кратко и
                                ясно описать смысловую связь элементов, которые объеденены группой. Есть несколько
                                видов заголовков с разной конструкцией. Не рекомендуется использовать более одного
                                заголовка в пределах одной группы.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                    </div>
                                }
                                description={'Простой заголовок.'}>
                                <Container>
                                    <Title>
                                        Little Title
                                    </Title>
                                </Container>
                            </Example>
                        </div>

                        <div id={"titleDropDown"} className="st-content--section">
                            <h1 className="st-content--section-title">TitleDropDown</h1>
                            <p className="st-mainText">
                                В правой части заголовка находится кнопка, нажав на которую пользователь может открыть
                                выпадающее меню.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                    </div>
                                }
                                description={'Заголовок с выпадающим меню.'}>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>
                                        Box Transforms
                                    </Title>
                                </Container>
                            </Example>
                        </div>

                        <div id={"titleSwitch"} className="st-content--section">
                            <h1 className="st-content--section-title">TitleSwitch</h1>
                            <p className="st-mainText">
                                Заголовок с переключателем идеально подойдут для ситуаций, когда необходимо скрыть
                                лишний контент. В примере ниже, мы используем переключатель, чтобы скрыть меню настройки
                                расположения логотипа на коробе.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleDropDown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleSwitch'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Select'} level={3}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }
                                description={'Заголовок с переключателем.'}>
                                <Container>
                                    <Title after={<DropDownButton label={'gr'}/>}>
                                        Box Weight
                                    </Title>
                                    <Input placeholder={'2100'}/>
                                    <Title after={<Switch onSwitch={this.toggleLogo} isActive={this.state.isLogotype}/>}>
                                        Logotype
                                    </Title>
                                    {this.state.isLogotype &&
                                    <Input label={'Placement side'} placeholder={'For example, Left'}/>
                                    }
                                    <Separator/>
                                    <Button label={'Continue'}/>
                                </Container>
                            </Example>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Styleguide;