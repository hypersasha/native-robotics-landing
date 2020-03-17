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
import SnackbarIconDone from './assets/imgs/icons/snackdone.png';

import MicroButton from "./components/UIKit/MicroButton/MicroButton";
import Select from "./components/UIKit/Select/Select";
import Slider from "./components/UIKit/Slider/Slider";
import Tooltip from "./components/UIKit/Tooltip/Tooltip";
import ModalWindow from "./components/UIKit/ModalWindow/ModalWindow";
import Snackbar from "./components/UIKit/Snackbar/Snackbar";
import Arguments from "./components/UIKit/Arguments/Arguments";

class Styleguide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'intro',
            isLogotype: false,
            activeSettings: 'common',
            percent: 0,
            isModal: false,
            isSnackbar: false
        };

        this.changeTab = this.changeTab.bind(this);
        this.toggleLogo = this.toggleLogo.bind(this);
        this.updatePercent = this.updatePercent.bind(this);
        this.onModalCancel = this.onModalCancel.bind(this);

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

        // window.addEventListener('scroll', () => {
        //     let navMain = document.getElementById('navigation');
        //     if (window.scrollY > this.scrollPos) {
        //         if (navMain.style.alignSelf === 'flex-start') {
        //             navMain.style.alignSelf = 'flex-end';
        //             navMain.style.top = 'auto';
        //             navMain.style.bottom = '20px';
        //             console.log('scroll down');
        //         }
        //     } else {
        //         if (navMain.style.alignSelf === 'flex-end') {
        //             console.log('scroll up');
        //             navMain.style.marginTop = window.scrollY + navMain.getBoundingClientRect().top + 'px';
        //             navMain.style.alignSelf = 'flex-start';
        //         }
        //         if (navMain.getBoundingClientRect().top >= 108) {
        //             navMain.style.marginTop = '0px';
        //             navMain.style.top = '108px';
        //             navMain.style.bottom = 'auto';
        //         }
        //     }
        //     this.scrollPos = window.scrollY;
        // })
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

    updatePercent(percent) {
        percent = Math.ceil(percent);
        this.setState({percent});
    }

    onModalCancel() {
        this.setState({
            isModal: false
        })
    }

    render() {
        return (
            <div>

                <div className="scrollUp" onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                    <div className="scrollUp--icon">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1875 20.0156L21 8.20312L32.8125 20.0156" stroke="#d5d5d5" strokeWidth="4"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 9.84375V33.7969" stroke="#d5d5d5" strokeWidth="4" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* Header */}

                <div className="st-header">
                    <div className="st-header--content">
                        <div className="st-logo">
                            <div style={{height: 28}}>
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

                    <div id={'navigation'} className="st-menu">
                        <div>
                            <NavLink activeTab={this.state.activeTab} hash={'intro'}
                                     onNavigate={this.changeTab}>Intro</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'container'}
                                     onNavigate={this.changeTab}>Container</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'group'}
                                     onNavigate={this.changeTab}>Group</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'header'}
                                     onNavigate={this.changeTab}>Header</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerButton'}
                                     onNavigate={this.changeTab}>HeaderButton</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerDropDown'}
                                     onNavigate={this.changeTab}>HeaderDropDown</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'headerSwitch'}
                                     onNavigate={this.changeTab}>HeaderSwitch</NavLink>

                            <div className="navSplit"/>

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

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'button'}
                                     onNavigate={this.changeTab}>Button</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'iconButton'}
                                     onNavigate={this.changeTab}>ButtonIcon</NavLink>
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
                            <NavLink activeTab={this.state.activeTab} hash={'microButton'}
                                     onNavigate={this.changeTab}>MicroButton</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'input'}
                                     onNavigate={this.changeTab}>Input</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'inputHeaded'}
                                     onNavigate={this.changeTab}>InputHeaded</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'select'}
                                     onNavigate={this.changeTab}>Select</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'switch'}
                                     onNavigate={this.changeTab}>Switch</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'slider'}
                                     onNavigate={this.changeTab}>Slider</NavLink>
                            <NavLink activeTab={this.state.activeTab} hash={'sliderIcons'}
                                     onNavigate={this.changeTab}>SliderIcons</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'tooltip'}
                                     onNavigate={this.changeTab}>Tooltip</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'modalWindow'}
                                     onNavigate={this.changeTab}>ModalWindow</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'snackbar'}
                                     onNavigate={this.changeTab}>Snackbar</NavLink>

                            <div className="navSplit"/>

                            <NavLink activeTab={this.state.activeTab} hash={'separator'}
                                     onNavigate={this.changeTab}>Separator</NavLink>

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

                        <div className="contentSplit"/>

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

                        <div className="contentSplit"/>

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

                        <div className="contentSplit"/>

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
                            <h1 className="st-content--section-title">ButtonIcon</h1>
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
                                InlineButton отличается принципом размещения. Кнопка такого типа
                                размещается за пределами контейнера (прямиком на экране). Кнопка Inline сама по себе
                                является контейнером, поэтому не требует никаких обёрток.
                            </p>
                            <Example
                                description={'Inline-кнопка над контейнером.'}
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

                        {/* Micro Button */}
                        <div id={"microButton"} className="st-content--section">
                            <h1 className="st-content--section-title">MicroButton</h1>
                            <p className="st-mainText">
                                MicroButton располагается снизу по-середине экрана. Пример этой кнопки есть на экране
                                настройки раскладки.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'MicroButton'}/>
                                    </div>
                                }>
                                <div style={{display: 'block', position: 'relative', height: 200, width: 300}}>
                                    <MicroButton label={'Clear Pallet'}/>
                                </div>
                            </Example>
                        </div>

                        <div className="contentSplit"/>

                        {/* Input */}
                        <div id={"input"} className="st-content--section">
                            <h1 className="st-content--section-title">Input</h1>
                            <p className="st-mainText">
                                Используйте поля ввода для запроса от пользователя текстовой информации.
                            </p>
                            <Example
                                description={'У обычного Input нет заголовка.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'HeaderDropdown'} level={3}/>
                                        <Prefab label={'Input'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>Box Width</Title>
                                    <Input/>
                                </Container>
                            </Example>
                        </div>

                        {/* InputHeaded */}
                        <div id={"inputHeaded"} className="st-content--section">
                            <h1 className="st-content--section-title">InputHeaded</h1>
                            <p className="st-mainText">
                                Обычный Input, только с заголовком.
                            </p>
                            <Example
                                description={'У обычного Input нет заголовка.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'HeaderDropdown'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<DropDownButton label={'mm'}/>}>Box Transform</Title>
                                    <Input label={'Width'}/>
                                    <Input label={'Length'}/>
                                    <Input label={'Height'}/>
                                </Container>
                            </Example>
                        </div>

                        {/* Select */}
                        <div id={"select"} className="st-content--section">
                            <h1 className="st-content--section-title">Select</h1>
                            <p className="st-mainText">
                                Компонент Select по внешнему виду похож на обычное поле ввода, однако в него нельзя
                                ввести любую информацию. Используйте Select, когда необходимо предоставить пользователю
                                выбор из нескольких вариантов (от 3 опций и более).
                            </p>
                            <Example
                                description={'Выбор стороны короба для нанесения логотипа.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'HeaderSwitch'} level={3}/>
                                        <Prefab label={'Select'} level={3}/>
                                        <Prefab label={'ButtonWhite'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title after={<Switch isActive={true}/>}>Logotype</Title>
                                    <Select label={'Placement side'} placeholder={'Choose box side'}/>
                                    <Button level={"white"} label={'Apply'}></Button>
                                </Container>
                            </Example>
                            <Tip title={'Совет'}>
                                <p>Не используйте Select, для выбора из 2 или менее опций.</p>
                            </Tip>
                        </div>

                        <div className="contentSplit"/>

                        {/* Switch */}
                        <div id={"switch"} className="st-content--section">
                            <h1 className="st-content--section-title">Switch</h1>
                            <p className="st-mainText">
                                Переключатели часто используются в настройках. Когда необходимо
                                включить/отключить тот или иной функционал. Вы уже встречали этот элемент в качестве
                                потомка других компонентов. Однако, Switch может существовать и сам по себе.
                            </p>
                            <Example
                                description={'День, ночь, день, ночь...'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Switch'}/>
                                    </div>
                                }>
                                <Switch/>
                            </Example>
                        </div>

                        <div className="contentSplit"/>

                        {/* Slider */}
                        <div id={"slider"} className="st-content--section">
                            <h1 className="st-content--section-title">Slider</h1>
                            <p className="st-mainText">
                                Слайдеры используются для установки какой-либо числовой величины в ограниченном
                                диапазоне. У слайдеров могут располагаться иконки (слева и справа), а также может
                                устанавливаться шаг, с которым слайдер переключает числовые значения.
                            </p>
                            <Example
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'Slider'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Slider/>
                                </Container>
                            </Example>
                        </div>

                        <div id={"sliderIcons"} className="st-content--section">
                            <h1 className="st-content--section-title">SliderIcons</h1>
                            <p className="st-mainText">
                                Такой же слайдер, только с иконками справа и слева.
                            </p>
                        </div>

                        <div className="contentSplit"/>

                        {/* Tooltip */}
                        <div id={"tooltip"} className="st-content--section">
                            <h1 className="st-content--section-title">Tooltip</h1>
                            <p className="st-mainText">
                                Используйте подсказки для знакомства пользователя с новыми UI-элементами и функциями
                                приложения.
                            </p>
                            <p className="st-mainText">
                                Чтобы внедрить Tooltip в объект на сцене, просто добавьте компонент Tooltip на
                                необходимый объект. Компонент Tooltip обладает следующими полями:
                            </p>
                            <Arguments rows={[
                                {
                                    arg: 'Position',
                                    type: 'enum',
                                    desc: 'указывает с какой стороны от объекта будет отображаться подсказка. Возможные варианты - Left, Right, Down Right Arrow, Down Left Arrow, Up Right Arrow, Up Left Arrow.'
                                },
                                {
                                    arg: 'Text',
                                    type: 'string',
                                    desc: 'Текст, который будет выведен в подсказке.'
                                },
                                {
                                    arg: 'Prefab',
                                    type: 'Unity Prefab',
                                    desc: 'Стандартный префаб подсказки (по умолчанию - представленный в этом Styleguide)'
                                },
                                {
                                    arg: 'ArrowSprite',
                                    type: 'Sprite',
                                    desc: 'Стандартная текстура стрелки для подсказки (по умолчанию - представленная в этом Styleguide).'
                                },
                                {
                                    arg: 'TempTooltipTime',
                                    type: 'float',
                                    desc: 'Показывает подсказку на Temp Tooltip Time секунд, затем подсказка прячется.'
                                }
                            ]}/>
                            <p className="st-mainText">
                                Компонент Tooltip обладает следующими функциями, которыми вы можете вызывать, чтобы
                                управлять отображением подсказки для объекта, к которому этот компонент прикреплен:
                            </p>
                            <p className="st-mainText">
                                ShowTooltip(), HideTooltip(), ShowTempTooltip()
                            </p>
                            <Example
                                description={'Пример обычной подсказки.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'ButtonWhite'} level={3}/>
                                    </div>
                                }>
                                <Container>
                                    <Title>Box Width</Title>
                                    <Input label={'Width'} placeholder={'100'}/>
                                    <Tooltip text={'Oh my White!'}>
                                        <Button level={'white'} label={'Apply'}/>
                                    </Tooltip>
                                </Container>
                            </Example>
                        </div>

                        <div className="contentSplit"/>

                        {/* ModalWindow */}
                        <div id={"modalWindow"} className="st-content--section">
                            <h1 className="st-content--section-title">ModalWindow</h1>
                            <p className="st-mainText">
                                Используйте всплывающие окна для вывода особо важных уведомлений.
                                Например, они хорошо подходят для оповещения пользователя о неудачном завершении
                                какой-либо операции. ModalWindow затемняет 80% экранного пространства и фокусирует
                                внимание пользователя на себя.
                            </p>
                            <p className="st-mainText">
                                Для использования функционала ModalWindow, необходимо добавить ModalWindow на сцену.
                                Затем все методы ModalWindow будут доступны из любого скрипта с помощью конструкции
                                ModalWindow.instance.Method().
                            </p>
                            <p className="st-mainText">
                                Главным методом ModalWindow является Show(), который отобразит необходимое вам модальное
                                окно. Метод Show() принимает следующие параметры:
                            </p>
                            <Arguments rows={[
                                {
                                    arg: 'header',
                                    type: 'string',
                                    desc: 'Заголовок модального окна.'
                                },
                                {
                                    arg: 'message',
                                    type: 'string',
                                    desc: 'Главное сообщение модального окна.'
                                },
                                {
                                    arg: 'actions',
                                    type: 'ModalWindowAction []',
                                    desc: 'Массив объектов ModalWindowAction, которые будут представлены в модальном окне, по умолчанию null.'
                                },
                                {
                                    arg: 'withCancel',
                                    type: 'bool',
                                    desc: 'При значении true, добавляется кнопка отмены. Позиция кнопки будет определена автоматически, в соответствии с OmniKit UI Styleguide. По-умолчанию = true.'
                                },
                                {
                                    arg: 'isHorizontal',
                                    type: 'bool',
                                    desc: 'При значении true, модальное окно будет представлено в горизонтальной ориентации. Если в модальном окне представлено больше, чем два ModalWindowAction или один ModalWIndowAction и кнопка отмены, то модальное окно всё равно будет отображаться в вертикальной ориентации, в соответствии с OmniKit UI Styleguide. По умолчанию = false'
                                },
                                {
                                    arg: 'cancelAction',
                                    type: 'Action',
                                    desc: 'Метод, который необходимо вызвать при нажатии пользователем кнопки отмены, по-умолчанию = null'
                                },
                                {
                                    arg: 'preview',
                                    type: 'Sprite',
                                    desc: 'Спрайт, который необходимо добавить в модальное окно, по-умолчанию = null'
                                }
                            ]}/>
                            <p className="st-mainText">
                                Чтобы закрыть модальное окно, воспользуйтесь методом Close().
                                Чтобы открыть модальное окно с последними параметрами, воспользуйтесь методом Open().
                            </p>
                            <Example
                                description={'Нажмите на синюю кнопку.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'ListView'} level={3} expanded/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                        <Prefab label={'InfoRow'} level={4}/>
                                    </div>
                                }>
                                <div>
                                    {this.state.isModal && <ModalWindow onCancel={this.onModalCancel}/>}
                                    <Container>
                                        <Title>Layout Information</Title>
                                        <InfoRow title={'Box Transform'}>320x150x90 mm</InfoRow>
                                        <InfoRow title={'Box Weight'}>2 250 gr</InfoRow>
                                        <InfoRow title={'Pallet'}>EURO</InfoRow>
                                        <InfoRow title={'Layout Symmetry'}>X and Y</InfoRow>
                                        <InfoRow title={'Number of Layers'}>7</InfoRow>
                                        <InfoRow title={'Number of Pallets'}>2</InfoRow>
                                        <Separator/>
                                        <Button onClick={() => {
                                            this.setState({isModal: true})
                                        }} label={'Continue'}></Button>
                                    </Container>
                                </div>
                            </Example>
                        </div>

                        <div className="contentSplit"/>

                        {/* Snackbar */}
                        <div id={"snackbar"} className="st-content--section">
                            <h1 className="st-content--section-title">Snackbar</h1>
                            <p className="st-mainText">
                                Этот компонент является упрощенной версией модального окна. Snackbar появляется снизу
                                экрана на некоторое время. Элемент отлично подходит для оповещения
                                пользователя о каких-либо событиях. Snackbar не блокирует интерфейс.
                            </p>
                            <p className="st-mainText">
                                Snackbar может содержать иконку слева от текста. В примере ниже используется именно
                                версия с иконкой.
                            </p>
                            <p className="st-mainText">
                                Для использования функционала Snackbar, необходимо добавить Snackbar на сцену. Затем
                                вызов Snackbar будет доступен из любого скрипта с помощью конструкции
                                Snackbar.instance.Show().
                            </p>
                            <p className="st-mainText">Метод Show() принимает следующие параметры:</p>
                            <Arguments rows={[
                                {
                                    arg: 'text',
                                    type: 'string',
                                    desc: 'Текст, который необходимо отобразить в Snackbar'
                                },
                                {
                                    arg: 'style',
                                    type: 'SnackbarStyle',
                                    desc: 'Стиль Snackbar. Возможные варианты: Default, Success, Warning, Error.'
                                },
                                {
                                    arg: 'duration',
                                    type: 'float',
                                    desc: 'Время в секундах, за которое Snackbar появится и пропадет с экрана. По умолчанию = 3.0f.'
                                }
                            ]}/>
                            <Example
                                description={'Нажмите на синюю кнопку.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'Header'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                        <Prefab label={'Button'} level={3}/>
                                    </div>
                                }>
                                <div>
                                    {this.state.isSnackbar &&
                                    <Snackbar description={'Creating layout with this box.'}
                                              icon={SnackbarIconDone}
                                              onClose={() => {
                                                  this.setState({isSnackbar: false})
                                              }}/>}
                                    <Container>
                                        <Title after={<DropDownButton label={'mm'}/>}>Box Transform</Title>
                                        <Input label={'Width'}/>
                                        <Input label={'Length'}/>
                                        <Input label={'Height'}/>
                                        <Separator/>
                                        <Button onClick={() => {
                                            this.setState({isSnackbar: true})
                                        }} label={'Continue'}/>
                                    </Container>
                                </div>
                            </Example>
                        </div>

                        <div className="contentSplit"/>

                        {/* separator */}
                        <div id={"separator"} className="st-content--section">
                            <h1 className="st-content--section-title">Separator</h1>
                            <p className="st-mainText">
                                Разделитель контента. На самом деле, данный элемент используется повсеместно. Главной
                                задачей разделителя является уравнивание отступов внутри контейнеров.
                            </p>
                            <p className="st-mainText">
                                Дело в том, что большинство компонентов имеют фиксированные отступы сверху и снизу. При
                                сборке интерфейса часто встречаются ситуации, когда один компонент прилипает к другому.
                                Используя разделитель, можно легко миновать подобные проблемы.
                            </p>
                            <p className="st-mainText">
                                Например, Вам необходимо разместить в контейнере лишь одно поле ввода. Давайте
                                попробуем:
                            </p>
                            <Example
                                description={'Одно поле ввода, без разделителя.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                    </div>
                                }>
                                <div>
                                    {this.state.isSnackbar &&
                                    <Snackbar description={'Creating layout with this box.'}
                                              icon={SnackbarIconDone}
                                              onClose={() => {
                                                  this.setState({isSnackbar: false})
                                              }}/>}
                                    <Container>
                                        <Input placeholder={'First Name'}/>
                                    </Container>
                                </div>
                            </Example>
                            <p className="st-mainText">
                                Можно заметить, как поле ввода "прилипло" к верхней границе
                                контейнера. Теперь добавим разделитель:
                            </p>
                            <Example
                                description={'Разделитель сверху. Отступы равны.'}
                                prefabsList={
                                    <div>
                                        <Prefab label={'Container'} expanded/>
                                        <Prefab label={'Separator'} level={2}/>
                                        <Prefab label={'Group'} expanded level={2}/>
                                        <Prefab label={'InputHeaded'} level={3}/>
                                    </div>
                                }>
                                <div>
                                    {this.state.isSnackbar &&
                                    <Snackbar description={'Creating layout with this box.'}
                                              icon={SnackbarIconDone}
                                              onClose={() => {
                                                  this.setState({isSnackbar: false})
                                              }}/>}
                                    <Container>
                                        <Separator/>
                                        <Input placeholder={'First Name'}/>
                                    </Container>
                                </div>
                            </Example>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Styleguide;