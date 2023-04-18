import React, { useEffect, useState } from 'react'
import BaseInformation from '../../../../data/data'
import classnames from 'classnames'

const Slide = iniClasses => {
	const imgLoad = BaseInformation.SlideInfo.map((info, index) => (
		<div
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL + info.src})` }}
			data={info.id}
			className={classnames('slide_image')}
			key={index.toString()}
		></div>
	))

	const discriptionLoadFirstLine = BaseInformation.SlideInfo.map(
		(info, index) => (
			<span data={info.id} className="" key={index.toString()}>
				{info.first_line}
			</span>
		),
	)

	const discriptionLoadSecondLine = BaseInformation.SlideInfo.map(
		(info, index) => (
			<span data={info.id} className="" key={index.toString()}>
				{info.second_line}
			</span>
		),
	)

	const imgDiv = imgLoad
	const imgDiscriptionFirst = discriptionLoadFirstLine
	const imgDiscriptionSecond = discriptionLoadSecondLine

	const [activeIndex, setActiveIndex] = useState(0)

	// Хук Effect
	useEffect(() => {
		// Запускаем интервал
		const interval = setInterval(() => {
			// Меняем состояние
			setActiveIndex(current => {
				// Вычисляем индекс следующего слайда, который должен вывестись
				const res = current === imgDiv.length - 1 ? 0 : current + 1
				// Возвращаем индекс
				return res
			})
		}, 5000)
		// Выключаем интервал
		return () => clearInterval()
	}, [])

	// Вычисляем индекс предыдущего слайда
	const prevImgIndex = activeIndex ? activeIndex - 1 : imgDiv.length - 1
	// Вычисляем индекс следующего слайда
	const nextImgIndex = activeIndex === imgDiv.length - 1 ? 0 : activeIndex + 1

	const SlidePrevew = () => {
		return (
			<div id="slide_prevew" className="slider">
				<div className="slide_image wait_slide_left" key={prevImgIndex}>
					{imgDiv[prevImgIndex]}
				</div>
				<div className="slide_image" key={activeIndex}>
					{imgDiv[activeIndex]}
				</div>
				<div className="slide_image wait_slide_right" key={nextImgIndex}>
					{imgDiv[nextImgIndex]}
				</div>
			</div>
		)
	}

	const SlideDiscription = () => {
		return (
			<div id="slide_discription">
				<div className="first_line">{imgDiscriptionFirst[activeIndex]}</div>
				<div className="second_line">{imgDiscriptionSecond[activeIndex]}</div>
			</div>
		)
	}

	return (
		<div id="slider_body">
			<SlidePrevew />
			<SlideDiscription />
		</div>
	)
}
export default Slide
