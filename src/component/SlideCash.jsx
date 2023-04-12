import React, { useState } from 'react'
import BaseInformation from '../date/date';
import classnames from "classnames";

// let cx = classNames.bind();

const SlideCash = (iniClasses) => {


    let [styleList, styleListCondition] = useState([
        {}
    ]);

    // let names = ['HTML', 'CSS', 'JavaScript'];

    // let nameLengths = names.map(function (name) {
    //     return name;
    // });

    // console.log(nameLengths);

    const arr = [
        {
            a: '1',
            b: '2',
        },
    ];
    console.log(arr);

    const newArr = arr.map((item) => {
        return {
            ...item,
            c: '3',
        };
    });
    console.log(newArr);

    let steleLoad = BaseInformation.SlideInfo.map((info, index) => {
        switch (index) {
            case 0:
                //console.log(styleList[index]);
                if (styleList[index].condition == undefined) {
                    styleList[index] = ({ id: info.id, condition: 'active_slide' })
                } else {
                    //console.log(styleList[index]);
                    styleList[index].id = info.id
                };
                break;
            case 1: styleList.push({ id: info.id, condition: 'wait_slide_right' });
                break;
            default:
                if (styleList[(index - 1)].condition === 'wait_slide_left') {
                    styleList[(index - 1)].condition = '';
                    styleList.push({ id: info.id, condition: 'wait_slide_left' });
                } else
                    styleList.push({ id: info.id, condition: 'wait_slide_left' });
                break;
        }

        styleList[index].first_line = 'test';
        return info;

        //styleList[index] = { id: info.id, condition: 'active_slide' }
        //console.log(steleLoad[index]);
    });
    console.log('styleList - ', styleList);
    console.log('steleLoad - ', steleLoad);

    steleLoad[0].id = 111111;
    //steleLoad[0].add(condition = 111111);

    //steleLoad();


    // let className = cx({
    //     base: true,
    //     inProgress: this.props.store.submissionInProgress,
    //     error: this.props.store.errorOccurred,
    //     disabled: this.props.form.valid,
    // });

    const SlidePrevew = ({ }) => {
        return (
            <div id="slide_prevew">
                {BaseInformation.SlideInfo.map((info, index) =>
                    < div
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + info.src})` }}
                        data={info.id}
                        //className={classnames("slide_image " + addStyle(index, info.id), styleList[index].condition)}
                        className={classnames("slide_image", addStyle(index, info.id), ClueClass(index))}
                        key={index.toString()}>
                    </div>)
                }
            </div >
        );
    };

    const ClueClass = (index) => {
        return (
            styleList[index].condition
        )
    };

    const Title = ({ spacer, color, title }) => {
        return (
            <span
                className={classnames("title", {
                    spacer,
                    [`${color}`]: color
                })}
            >
                {title}
            </span>
        );
    };



    //let styleList = [];

    // const listStyle = (index, add) => {
    //     console.log(index, add);
    //     console.log(styleList);

    //     switch (index) {
    //         case 0: if (styleList[index] == undefined) {
    //             styleList.push({ id: add, condition: 'active_slide' })
    //         } else {
    //             styleList[index].id = add
    //         };
    //             break;
    //         case 1: styleList.push({ id: add, condition: 'wait_slide_right' });
    //             break;
    //         default:
    //             if (styleList[(index - 1)].condition === 'wait_slide_left') {
    //                 styleList[(index - 1)].condition = '';
    //                 styleList.push({ id: add, condition: 'wait_slide_left' });
    //             } else
    //                 styleList.push({ id: add, condition: 'wait_slide_left' });
    //             break;
    //     }
    // }

    const addStyle = (index, info) => {
        //console.log('call');
        // listStyle(index, info);
        //return styleList[index].condition;
    };

    const rerenderSt = () => {
        // styleListCondition(
        //     console.log('111')
        // )
    }

    return (



        //     <Title
        //     spacer={true}
        //     color="blue"
        //     title="Hello Title with props style, with classnames lib"
        //   />


        <div id="slider_body">
            <button className={'111'} onClick={rerenderSt} >клик</button>
            <div id="slide_prevew">
                <SlidePrevew />
                {/* {BaseInformation.SlideInfo.map((info, index) =>
                    <div
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + info.src})`
                        }} data={info.id}
                        className={"slide_image " + addStyle(index, info.id)
                        } key={index.toString()}></div>
                )} */}
            </div>
            <div id="slide_discription">
                <div className="first_line">
                    {BaseInformation.SlideInfo.map((info, index) =>
                        <span data={info.id} className="first_line active_slide" key={index.toString()}>
                            {info.first_line}
                        </span>
                    )}
                </div>
                <div className="second_line">
                    {BaseInformation.SlideInfo.map((info, index) =>
                        <span data={info.id} className="first_line active_slide" key={index.toString()}>
                            {info.second_line}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Slide;