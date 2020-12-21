import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../Navigation/Breadcrumbs';
import Breadcrumbs from '../Navigation/Breadcrumbs';

const latest_bg = require('../../assets/imgs/bad-good-programming.jpg')

import './blogpost.less';

export default function BlogPost() {
    let { postId } = useParams();

    useEffect(() => {
        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });
        window.scrollTo(0,0);
    }, [])

    return(
        <div>
            <Breadcrumbs />
            <div className="blog-post-container">
                <h1 className="article-title">Why your robot will die in 8 months or top 5 things I wish I knew before I bought a robot</h1>
                <div className="article-time">October 15, 2020 — Michael Khmelik </div>
                <div className="article-cover" style={{backgroundImage: 'url('+latest_bg+')'}} />
                {/* <div className="article-header">
                    <h2>Introduction</h2>
                </div> */}
                <div className="article-paragraph">
                    <p>Robots are the Next Big Thing, which is happening to us right now.</p>
                </div>
                <div className="article-paragraph">
                    <p>This is especially true for industrial applications, since as <a href="https://itif.org/publications/2019/10/15/robotics-and-future-production-and-work" target="_blank">analysts say</a> robotics might be the main driver behind productivity increase in the coming years. However, adaptation of industrial (and collaborative) robots seems to be going...slow.</p>
                </div>
                <div className="article-paragraph">
                    <p>Though there are various reasons to this, we at Native Robotics wanted to tap into the most tricky and impactful one - robot programming. We've seen cases when poor programming resulted in robot breakdown in just 8 months after installation!</p>
                </div>
                <div className="article-paragraph">
                    <p>In this article we wanted to arm you with knowledge, so you can avoid this situation. Here is what we are going to cover:</p>
                </div>
                <div className="article-list">
                    <ol>
                        <li>What does a conventional process of robot programming look like?</li>
                        <li>What tools do you have to program the robot?</li>
                        <li>What you should know when programming a robot?</li>
                        <li>What are the five challenges you will face during programming?</li>
                    </ol>
                </div>
                <div className="article-paragraph">
                    <p></p>
                </div>
                <div className="article-header">
                    <h2>What does a conventional process of robot programming look like?</h2>
                </div>
                <div className="article-paragraph">
                    <p>A core principle is motion-oriented programming or direct motion control. It means the user consecutively specifies robot motion commands between a set of points. Let me walk you though this:</p>
                </div>
                <div className="article-paragraph">
                    <p><strong>First,</strong> the user needs to define robot position points. For example, where the robot has to pick a part and where the robot has to place it. To do this, operator moves the robot into the first position and saves it, then moves the robot into the next one and saves it and so on.</p>
                </div>
                <div className="article-paragraph">
                    <p><b>Second</b>, operator needs to specify the movement type between these points. Note that the user does not set a custom trajectory of the robot movement but instead makes a choice between:</p>
                </div>
                <div className="article-list">
                    <ul>
                        <li><strong>Joint movement</strong> – the shortest path in the robot's coordinate system (6 degrees of freedom for a cobot like UR). Shortest means the robot moves only necessary joints. For an operator, it looks like an ellipse in Cartesian coordinate system (XYZ), though in reality it is more like a spline.</li>
                        <li><strong>Linear movement</strong> – a standard line in a Cartesian coordinate system.</li>
                    </ul>
                </div>
                <div className="article-paragraph">
                    <p>Those two types of motions are basic for most applications. Still, there are more specific types of motion: like circular motion, or motion with a constant speed, and some others.</p>
                </div>
                <div className="article-video">
                    <div className="video">
                        <iframe width="620" height="348" src="https://www.youtube.com/embed/Gu74rGY426g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <p>Great example from Kawasaki on different joint movements.</p>
                </div>
                <div className="article-image">
                    <img src="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg" alt="Tesla" />
                    <p>Tesla car, cause i cannot get link from Linked In.</p>
                </div>
                <div className="article-paragraph">
                    <p><strong>Finally</strong>, those commands are supplemented by commands for the robot's interaction with the outside world: to switch the port on, to switch the port off, to wait for a signal etc.</p>
                </div>
                <div className="article-paragraph">
                    <p>Now there are two approaches how you can make these three steps happen:</p>
                </div>
                <div className="article-paragraph">
                    <p><strong>Online programming</strong> – when an operator is standing near the robot and writing a program right on the site (using joystick on the teach pendant or using free drive function in a case with collaborative robots to specify the points). After the program is written, the operator starts it and checks how the robot runs it.</p>
                </div>
                <div className="article-image">
                    <img src="https://roboticsbook.com/wp-content/uploads/2019/04/kuka-smart-pad-robot-teach-pendant.jpg" alt="Tesla" />
                    <p>Example of a teach pendant by KUKA.</p>
                </div>
                <div className="article-paragraph">
                    <p><strong>Offline programming</strong> – when an operator writes a program using special simulation software. In this case the program is tested out on a virtual robot, and then transferred to a real machine (for example, through USB or by Ethernet).</p>
                </div>
                <div className="article-paragraph">
                    <p>After that the program is fine-tuned on the teach pendant, because reality and simulation can often mismatch in small, but critical details. In fact, as soon as an operator transfers the program to the teach pendant, he or she begins to edit the code, just like he or she does in online programming.</p>
                </div>
                <div className="article-paragraph">
                    <p>As a result, a desktop PC with a simulation program is just a convenient teach pendant with expanded functionality. It becomes particularly useful when you need to design a big and complex production site because then you don't need to come to each robot but can write a code for them all from one window.</p>
                </div>
                <div className="article-image">
                    <img src="https://robodk.com/doc/en/Robot-Programs_files/img2.png" alt="Tesla" />
                    <p>Example of how RoboDK offline simulator looks like.</p>
                </div>
                <div className="article-paragraph">
                    <p>In the next section, let’s dive into the tools you can use to program your robot.</p>
                </div>
            </div>
        </div>
    )
}