import React, {Component} from 'react';
import './styleguide.less';

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
import TitleButton from "./components/UIKit/Title/TitleButton";
import Cell from "./components/UIKit/Cell/Cell";
import Tip from "./components/UIKit/Tip";
import InfoRow from "./components/UIKit/Cell/InfoRow";
import InlineButton from "./components/UIKit/InlineButton/InlineButton";


import SettingsIcon from './assets/imgs/icons/settings.png';
import PalletsIcon from './assets/imgs/icons/pallets.png';
import RobotIcon from './assets/imgs/icons/robot.png';
import IdsIcon from './assets/imgs/icons/ids.png';
import ConnectionsIcon from './assets/imgs/icons/connections.png';
import NotificationsIcon from './assets/imgs/icons/notifications.png';
import AlignIcon from './assets/imgs/icons/align.png';
import MagicIcon from './assets/imgs/icons/magicpack.png';
import FaceOutIcon from './assets/imgs/icons/faceout.png';
import RotateIcon from './assets/imgs/icons/rotate.png';
import TrashIcon from './assets/imgs/icons/trash.png';
import PlusIcon from './assets/imgs/icons/plus.png';

class Styleguide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'intro',
            isLogotype: false,
            activeSettings: 'common'
        };

        this.changeTab = this.changeTab.bind(this);
        this.toggleLogo = this.toggleLogo.bind(this);
        this.scrollPos = window.scrollY;

        // window.addEventListener('scroll', () => {
        //     let element = document.getElementById('navigation');
        //     let topPos = element.getBoundingClientRect().top;
        //     let leftPos = element.getBoundingClientRect().left + window.scrollX;
        //     console.log(window.scrollY, element.offsetHeight + 108, window.innerHeight, topPos);
        //
        //     if (window.scrollY > this.scrollPos) {
        //         console.log('scrolling down..');
        //         if (window.scrollY + window.innerHeight > element.offsetHeight + 108) {
        //             element.style.position = 'fixed';
        //             element.style.top = topPos + 'px';
        //         }
        //     } else {
        //         if (element.style.position === 'fixed') {
        //             element.style.position = 'relative';
        //             element.style.top = 0 + 'px';
        //             element.style.marginTop = window.scrollY + 'px';
        //         }
        //         console.log('scrolling Up...');
        //     }
        //
        //     this.scrollPos = window.scrollY;
        // });
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

    toggleSettingsTab(newTab) {
        this.setState({
            activeSettings: newTab
        });
    }

    render() {
        return (
            <div>

                <div className="scrollUp" onClick={() => {window.scrollTo(0, 0);}}>
                    <div className="scrollUp--icon">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1875 20.0156L21 8.20312L32.8125 20.0156" stroke="#d5d5d5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 9.84375V33.7969" stroke="#d5d5d5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

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
                        <div id={'navigation'}>
                            <NavLink activeTab={this.state.activeTab} hash={'intro'}
                                     onNavigate={this.changeTab}>Intro</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'container'}
                                     onNavigate={this.changeTab}>Container</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'group'}
                                     onNavigate={this.changeTab}>Group</NavLink>

                            <div className="navSplit" />

                            <NavLink activeTab={this.state.activeTab} hash={'header'}
                                     onNavigate={this.changeTab}>Header</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerButton'}
                                     onNavigate={this.changeTab}>HeaderButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerDropDown'}
                                     onNavigate={this.changeTab}>HeaderDropDown</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerSwitch'}
                                     onNavigate={this.changeTab}>HeaderSwitch</NavLink>

                            <div className="navSplit" />

                            <NavLink activeTab={this.state.activeTab} hash={'listView'}
                                     onNavigate={this.changeTab}>ListView</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'cell'}
                                     onNavigate={this.changeTab}>Cell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'iconCell'}
                                     onNavigate={this.changeTab}>IconCell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'switchCell'}
                                     onNavigate={this.changeTab}>SwitchCell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'dangerCell'}
                                     onNavigate={this.changeTab}>DangerCell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'iconSwitchCell'}
                                     onNavigate={this.changeTab}>IconSwitchCell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'inputCell'}
                                     onNavigate={this.changeTab}>InputCell</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'infoRow'}
                                     onNavigate={this.changeTab}>InfoRow</NavLink>

                            <div className="navSplit" />

                            <NavLink activeTab={this.state.activeTab} hash={'button'}
                                     onNavigate={this.changeTab}>Button</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'iconButton'}
                                     onNavigate={this.changeTab}>IconButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'secondaryButton'}
                                     onNavigate={this.changeTab}>SecondaryButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'secondaryButtonIcon'}
                                     onNavigate={this.changeTab}>SecondaryButtonIcon</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'dangerButton'}
                                     onNavigate={this.changeTab}>DangerButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'dangerButtonIcon'}
                                     onNavigate={this.changeTab}>DangerButtonIcon</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'whiteButton'}
                                     onNavigate={this.changeTab}>WhiteButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'whiteButtonIcon'}
                                     onNavigate={this.changeTab}>WhiteButtonIcon</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'inlineButton'}
                                     onNavigate={this.changeTab}>InlineButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'inlineButtonIcon'}
                                     onNavigate={this.changeTab}>InlineButtonIcon</NavLink>

                            <div className="navSplit" />

                        </div>
                    </div>

                    {/* Content */}

                    <div className="st-content">

                        {/* intro */}
                        <div id={"intro"} className="st-content--section">
                            <h1 className="st-mainTitle">OmniKit UI Styleguide</h1>
                            <p className="st-mainText">Приложение OmniKit состоит из множества экранов, которые несут в
                                себе разный функционал. Каждый экран полон интерактивных элементов, призывающих
                                пользователя к взаимодействию с ними: кнопки, слайдеры, тогглы и так далее. Новый
                                функционал зачастую требует новых элементов для управления этим функционалом. В OmniKit
                                UI Styleguide мы расскажем, как быстро и правильно собрать собственный пользовательский
                                интерфейс, полностью готовый к публикации.</p>

                        </div>

                        {/* container */}
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
                                        <Prefab label={'HeaderDropdown'} level={3}/>
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

                        {/* group */}
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
                                        <Prefab label={'HeaderDropdown'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderDropdown'} level={3}/>
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

                        <div className="contentSplit" />

                        {/* header */}
                        <div id={"header"} className="st-content--section">
                            <h1 className="st-content--section-title">Header</h1>
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
                                        <Prefab label={'Title'} level={3}/>
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

                        {/* headerButton */}
                        <div id={"headerButton"} className="st-content--section">
                            <h1 className="st-content--section-title">HeaderButton</h1>
                            <p className="st-mainText">
                                Заголовок с кнопкой справа.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderButton'} level={3}/>
                                    </div>
                                }
                                description={'Заголовок с кнопкой для любых целей.'}>
                                <Container>
                                    <Title after={<TitleButton label={'Edit'}/>}>
                                        Layout Presets
                                    </Title>
                                </Container>
                            </Example>
                        </div>

                        {/* headerDropDown */}
                        <div id={"headerDropDown"} className="st-content--section">
                            <h1 className="st-content--section-title">HeaderDropdown</h1>
                            <p className="st-mainText">
                                В правой части заголовка находится кнопка, нажав на которую пользователь может открыть
                                выпадающее меню.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderDropdown'} level={3}/>
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

                        {/* headerSwitch */}
                        <div id={"headerSwitch"} className="st-content--section">
                            <h1 className="st-content--section-title">HeaderSwitch</h1>
                            <p className="st-mainText">
                                Заголовки с переключателем идеально подойдут для ситуаций, когда необходимо скрыть
                                лишний контент. В примере ниже, мы используем переключатель, чтобы скрыть меню настройки
                                расположения логотипа на коробе.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderDropdown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderSwitch'} level={3}/>
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
                                    <Title
                                        after={<Switch onSwitch={this.toggleLogo} isActive={this.state.isLogotype}/>}>
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

                        <div className="contentSplit" />

                        {/* listView */}
                        <div id={"listView"} className="st-content--section">
                            <h1 className="st-content--section-title">ListView</h1>
                            <p className="st-mainText">
                                Компонент для отрисовки однородных Cell. ListView представляет собой обычный список,
                                который включает в себя похожие друг на друга элементы, например: <i>Cell, IconCell,
                                ExpandableCell</i> и так далее.
                            </p>
                        </div>

                        {/* cell */}
                        <div id={"cell"} className="st-content--section">
                            <h1 className="st-content--section-title">Cell</h1>
                            <p className="st-mainText">
                                Обычная ячейка для отображения внутри компонента ListView.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'TitleButton'} level={3}/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'CellSelect'} level={4}/>
                                        <Prefab label={'CellSelect'} level={4}/>
                                        <Prefab label={'CellSelect'} level={4}/>
                                        <Prefab label={'CellSelect'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ButtonSecondary'} level={3}/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }
                                description={'ListView с обычными Cell.'}>
                                <Container>
                                    <Title after={<TitleButton label={'Edit'}/>}>Layout Presets</Title>
                                    <Cell selected={true}>Jacobs Monarch 3x200</Cell>
                                    <Cell>Jacobs Melicano 150gr, Plastic box</Cell>
                                    <Cell>Jacobs Velour 140gr, Plastic box</Cell>
                                    <Cell>Coffee Beans, 900 gr</Cell>
                                    <Separator/>
                                    <Button label={'Continue to Setup'} level={"secondary"}/>
                                    <Button label={'Begin Simulation'}/>
                                </Container>
                            </Example>
                            <Tip title={'Обратите внимание'}>
                                <p>
                                    В данном примере испольузется компонент CellSelect. Все
                                    компоненты Cell с суффиксом Select используются в случаях, когда ваш список работает
                                    по
                                    принципу вкладок (то есть пользователь может выбирать элементы, нажимая на них).
                                </p>
                                <p>
                                    У всех компонентов Cell есть аналог с суфиксом Select, за исключением компонента
                                    InputCell.
                                </p>
                            </Tip>
                        </div>

                        {/* Icon Cell */}
                        <div id={"iconCell"} className="st-content--section">
                            <h1 className="st-content--section-title">IconCell</h1>
                            <p className="st-mainText">
                                Используйте IconCell для отрисовки ячеек с иконками. Размеры иконок — 28px.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                    </div>
                                }
                                description={'Используем IconCell для создания меню настроек.'}>
                                <Container>
                                    <Separator/>
                                    <Cell icon={SettingsIcon} onClick={() => {
                                        this.toggleSettingsTab('common')
                                    }} selected={(this.state.activeSettings === 'common')}>Common Settings</Cell>
                                    <Separator/>
                                    <Cell icon={PalletsIcon} onClick={() => {
                                        this.toggleSettingsTab('pallets')
                                    }} selected={(this.state.activeSettings === 'pallets')}>Pallets</Cell>
                                    <Cell icon={RobotIcon} onClick={() => {
                                        this.toggleSettingsTab('robot')
                                    }} selected={this.state.activeSettings === 'robot'}>Robot Settings</Cell>
                                    <Cell icon={ConnectionsIcon} onClick={() => {
                                        this.toggleSettingsTab('connections')
                                    }} selected={this.state.activeSettings === 'connections'}>Connection</Cell>
                                    <Cell icon={IdsIcon} onClick={() => {
                                        this.toggleSettingsTab('ids')
                                    }} selected={this.state.activeSettings === 'ids'}>Hardware IDs</Cell>
                                    <Separator/>
                                </Container>
                            </Example>
                        </div>

                        {/* Switch Cell */}
                        <div id={"switchCell"} className="st-content--section">
                            <h1 className="st-content--section-title">SwitchCell</h1>
                            <p className="st-mainText">
                                Ячейка с переключателем.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Header'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'SwitchCell'} level={4}/>
                                        <Prefab label={'SwitchCell'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                    </div>
                                }>
                                <Container>
                                    <Title>Available Pallets</Title>
                                    <Cell after={<Switch/>}>Left Pallet (A)</Cell>
                                    <Cell after={<Switch/>}>Right Pallet (B)</Cell>
                                    <Separator/>
                                </Container>
                            </Example>
                        </div>

                        {/* Danger Cell */}
                        <div id={"dangerCell"} className="st-content--section">
                            <h1 className="st-content--section-title">DangerCell</h1>
                            <p className="st-mainText">
                                Ячейка критического действия. Чаще всего используется в меню, например, в качестве
                                кнопки выхода из аккаунта.
                            </p>
                            <Example
                                description={'Простое меню с кнопкой "Выход".'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'Cell'} level={4}/>
                                        <Prefab label={'Cell'} level={4}/>
                                        <Prefab label={'Cell'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'DangerCell'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                    </div>
                                }>
                                <Container>
                                    <Separator/>
                                    <Cell>Privacy</Cell>
                                    <Cell>Subscription</Cell>
                                    <Cell>Help</Cell>
                                    <Separator/>
                                    <Cell danger={true}>Logout</Cell>
                                    <Separator/>
                                </Container>
                            </Example>
                        </div>

                        {/* Icon Switch Cell */}
                        <div id={"iconSwitchCell"} className="st-content--section">
                            <h1 className="st-content--section-title">IconSwitchCell</h1>
                            <p className="st-mainText">
                                Ячейка сложной организации, которая включает в себя и иконку, и переключатель
                                одновременно.
                            </p>
                            <Example
                                description={<div>Удобно использовать, в ситуациях, когда нет под-меню. <br/>Например,
                                    включение и выключение уведомлений.</div>}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'IconCellSelect'} level={4}/>
                                        <Prefab label={'IconSwitchCell'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                    </div>
                                }>
                                <Container>
                                    <Separator/>
                                    <Cell icon={SettingsIcon} onClick={() => {
                                        this.toggleSettingsTab('common')
                                    }} selected={(this.state.activeSettings === 'common')}>Common Settings</Cell>
                                    <Separator/>
                                    <Cell icon={PalletsIcon} onClick={() => {
                                        this.toggleSettingsTab('pallets')
                                    }} selected={(this.state.activeSettings === 'pallets')}>Pallets</Cell>
                                    <Cell icon={NotificationsIcon} after={<Switch/>}
                                          selected={this.state.activeSettings === 'robot'}>Notifications</Cell>
                                    <Separator/>
                                </Container>
                            </Example>
                        </div>

                        {/* Input Cell */}
                        <div id={"inputCell"} className="st-content--section">
                            <h1 className="st-content--section-title">InputCell</h1>
                            <p className="st-mainText">
                                Ячейка с полем ввода для текста.
                            </p>
                            <Example
                                description={<div>Используйте для запроса списка одинаковых данных.</div>}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderButton'} level={3} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'InputCell'} level={4}/>
                                        <Prefab label={'InputCell'} level={4}/>
                                        <Prefab label={'InputCell'} level={4}/>
                                        <Prefab label={'Separator'} level={2}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<TitleButton label={'Edit'}/>}>Robot IDs</Title>
                                    <Input placeholder={'Robot Id'} defaultValue={15044}/>
                                    <Input placeholder={'Robot Id'} defaultValue={3654}/>
                                    <Input placeholder={'Robot Id'}/>
                                </Container>
                            </Example>
                        </div>

                        {/* InfoRow */}
                        <div id={"infoRow"} className="st-content--section">
                            <h1 className="st-content--section-title">InfoRow</h1>
                            <p className="st-mainText">
                                Иногда необходимо вывести список какой-либо полезной для пользователя информации.
                                Компонент InfoRow подойдет для решения подобной задачи лучше всего. Просто поместите его
                                в ListView.
                            </p>
                            <Example
                                description={'Выводим информацию о раскладке.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Header'} level={3} expanded/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                    </div>
                                }>
                                <Container>
                                    <Title>Layout Information</Title>
                                    <InfoRow title={'Pallet Type'}>
                                        EURO
                                    </InfoRow>
                                    <InfoRow title={'Box Content'}>
                                        Fragile load
                                    </InfoRow>
                                    <InfoRow title={'Box Weight'}>
                                        1250 gr
                                    </InfoRow>
                                </Container>
                            </Example>
                        </div>

                        <div className="contentSplit" />

                        {/* Button */}
                        <div id={"button"} className="st-content--section">
                            <h1 className="st-content--section-title">Button</h1>
                            <p className="st-mainText">
                                Трудно представить себе интерфейс, в котором нет ни одной кнопки. В дизайн-системе
                                OmniKit мы выделяем целых четыре типа кнопок под разные цели и контент. Наиболее
                                популярными являются Button и SecondaryButton. Ниже приведен пример использования
                                основной синей кнопки Button.
                            </p>
                            <Example
                                description={'Простая кнопка.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderDropDown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<DropDownButton label={'gr'}/>}>Box Weight</Title>
                                    <Input placeholder={'245'}/>
                                    <Button label={'Continue'}/>
                                </Container>
                            </Example>
                        </div>

                        {/* IconButton */}
                        <div id={"iconButton"} className="st-content--section">
                            <h1 className="st-content--section-title">IconButton</h1>
                            <p className="st-mainText">
                                Обычная кнопка с иконкой слева. Размер иконки — 21px.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderDropDown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                        <Prefab label={'IconButton'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>Box Center</Title>
                                    <Input placeholder={'100'}/>
                                    <Button label={'Auto-Align'} icon={AlignIcon}/>
                                </Container>
                            </Example>
                        </div>

                        {/* Secondary Button */}
                        <div id={"secondaryButton"} className="st-content--section">
                            <h1 className="st-content--section-title">SecondaryButton</h1>
                            <p className="st-mainText">
                                Серая кнопка второго уровня. Используется для дополнительных действий.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Button'} level={3}/>
                                        <Prefab label={'SecondaryButton'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Separator/>
                                    <Button label={'Save Layout'}/>
                                    <Button label={'Discard Changes'} level={"secondary"}/>
                                </Container>
                            </Example>
                        </div>

                        {/* Secondary Button Icon */}
                        <div id={"secondaryButtonIcon"} className="st-content--section">
                            <h1 className="st-content--section-title">SecondaryButtonIcon</h1>
                            <p className="st-mainText">
                                Кнопка второго уровня c иконкой.
                            </p>
                            <Example
                                description={'С иконками действия выглядят лучше. :)'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'SecondaryButtonIcon'} level={3}/>
                                        <Prefab label={'SecondaryButtonIcon'} level={3}/>
                                        <Prefab label={'SecondaryButtonIcon'} level={3}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderSwitch'} level={3}/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Button'} level={3}/>

                                    </div>
                                }>
                                <Container>
                                    <Title>Layout Setup</Title>
                                    <Button label={'Auto-Align'} level={"secondary"} icon={AlignIcon}/>
                                    <Button label={'Magic Pack'} level={"secondary"} icon={MagicIcon}/>
                                    <Button label={'Boxes Face Out'} level={"secondary"} icon={FaceOutIcon}/>
                                    <Title after={<Switch/>}>Layout Grid</Title>
                                    <Separator/>
                                    <Button label={'Continue'}/>
                                </Container>
                            </Example>
                        </div>

                        {/* Danger Button */}
                        <div id={"dangerButton"} className="st-content--section">
                            <h1 className="st-content--section-title">DangerButton</h1>
                            <p className="st-mainText">
                                Красная кнопка критического действия.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'SecondaryButton'} level={3}/>
                                        <Prefab label={'DangerButton'} level={3}/>

                                    </div>
                                }>
                                <Container>
                                    <Title>Layout Settings</Title>
                                    <Button label={'Rename Layout'} level={"secondary"}/>
                                    <Button label={'Delete'} level={"danger"}/>
                                </Container>
                            </Example>
                        </div>

                        {/* Danger Button Icon */}
                        <div id={"dangerButtonIcon"} className="st-content--section">
                            <h1 className="st-content--section-title">DangerButtonIcon</h1>
                            <p className="st-mainText">
                                Красная кнопка критического действия c иконкой.
                            </p>
                            <Example
                                description={'Критическое действие - удаление короба.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'SecondaryButtonIcon'} level={3}/>
                                        <Prefab label={'DangerButtonIcon'} level={3}/>

                                    </div>
                                }>
                                <Container>
                                    <Title>Selected Box</Title>
                                    <Button label={'Rotate 90°'} level={"secondary"} icon={RotateIcon}/>
                                    <Button label={'Delete'} level={"danger"} icon={TrashIcon}/>
                                </Container>
                            </Example>
                        </div>

                        {/* White Button */}
                        <div id={"whiteButton"} className="st-content--section">
                            <h1 className="st-content--section-title">WhiteButton</h1>
                            <p className="st-mainText">
                                Белая кнопка.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'SecondaryButton'} level={3}/>
                                        <Prefab label={'WhiteButton'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title>Selected Side</Title>
                                    <Button label={'Add Logo'} level={"secondary"}/>
                                    <Button label={'Update Side'} level={"white"}/>
                                </Container>
                            </Example>
                            <Tip title={'Экспериментальный элемент'}>
                                <p>
                                    Этот элемент является экспериментальным. Не рекомендуем использовать его слишком
                                    часто.
                                </p>
                            </Tip>
                        </div>

                        {/* White Button Icon */}
                        <div id={"whiteButtonIcon"} className="st-content--section">
                            <h1 className="st-content--section-title">WhiteButtonIcon</h1>
                            <p className="st-mainText">
                                Белая кнопкой с иконкой.
                            </p>
                        </div>

                        {/* Inline Button */}
                        <div id={"inlineButton"} className="st-content--section">
                            <h1 className="st-content--section-title">InlineButton</h1>
                            <p className="st-mainText">
                                InlineButton отличается от своих братьев принципом размещения. Кнопка такого типа
                                размещается за пределами контейнера (прямиком на экране). InlineButton сама по себе
                                контейнер и не требует никаких обёрток.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'InlineButton'}/>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} level={2} expanded/>
                                        <Prefab label={'HeaderButton'} level={3}/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'CellSelect'} level={4} expanded/>
                                        <Prefab label={'CellSelect'} level={4} expanded/>
                                        <Prefab label={'CellSelect'} level={4} expanded/>
                                    </div>
                                }>
                                <div>
                                    <InlineButton icon={PlusIcon} label={'Create a new Layout'}/>
                                    <Separator/>
                                    <Container>
                                        <Title after={<TitleButton label={'Edit'}/>}>Layout Presets</Title>
                                        <Cell>Jacobs Monarch 3x200</Cell>
                                        <Cell selected={true}>Jacobs Melicano 150gr, Plastic box</Cell>
                                        <Cell>Jacobs Velour 140gr, Plastic</Cell>
                                    </Container>
                                </div>
                            </Example>
                        </div>

                        {/* Inline Button Icon */}
                        <div id={"inlineButtonIcon"} className="st-content--section">
                            <h1 className="st-content--section-title">InlineButtonIcon</h1>
                            <p className="st-mainText">
                                InlineButton с иконкой. Использовался в предыдущем примере.
                            </p>
                        </div>

                        <div className="contentSplit" />
                    </div>
                </div>
            </div>
        )
    }

}

export default Styleguide;