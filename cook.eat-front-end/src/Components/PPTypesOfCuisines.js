import React, { useState, useEffect } from 'react';
import '../styles/PPTypesOfCuisines.css';
import { Image, Carousel } from 'react-bootstrap';
import AmericanCuisine from '../img/types-of-cuisines/american.jpg';
import BrazilianCuisine from '../img/types-of-cuisines/brazilian.jpg';
import CaribbeanCuisine from '../img/types-of-cuisines/caribbean.png';
import ChineseCuisine from '../img/types-of-cuisines/chinese.jpeg';
import EnglishCuisine from '../img/types-of-cuisines/english.jpg';
import EthiopianCuisine from '../img/types-of-cuisines/ethiopian.jpg';
import FrenchCuisine from '../img/types-of-cuisines/french.png';
import FilipinoCuisine from '../img/types-of-cuisines/filipino.jpg';
import GeorgianCuisine from '../img/types-of-cuisines/georgian.jpg';
import GermanCuisine from '../img/types-of-cuisines/german.jpg';
import GreekCuisine from '../img/types-of-cuisines/greek.jpg';
import IndianCuisine from '../img/types-of-cuisines/indian.jpg';
import IndonesianCuisine from '../img/types-of-cuisines/indonesian.jpg';
import ItalianCuisine from '../img/types-of-cuisines/italian.jpg';
import JamaicanCuisine from '../img/types-of-cuisines/jamaican.jpeg';
import JapaneseCuisine from '../img/types-of-cuisines/japanese.jpg';
import JewishCuisine from '../img/types-of-cuisines/jewish.jpg';
import KoreanCuisine from '../img/types-of-cuisines/korean.jpg';
import MexicanCuisine from '../img/types-of-cuisines/mexican.jpg';
import PolishCuisine from '../img/types-of-cuisines/polish.jpg';
import PersianCuisine from '../img/types-of-cuisines/persian.jpg';
import PortugueseCuisine from '../img/types-of-cuisines/portuguese.jpg';
import RussianCuisine from '../img/types-of-cuisines/russian.jpg';
import SpanishCuisine from '../img/types-of-cuisines/spanish.jpg';
import ThaiCuisine from '../img/types-of-cuisines/thai.jpg';
import VietnameseCuisine from '../img/types-of-cuisines/vietnamese.jpg';

const CarouselTypesOfCuisines = ({ setFormInfo, edit, formInfo }) => {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [culinaryType, setCulinaryType] = useState({
		american: false,
		brazilian: false,
		caribbean: false,
		chinese: false,
		english: false,
		ethiopian: false,
		french: false,
		filipino: false,
		georgian: false,
		german: false,
		greek: false,
		indian: false,
		indonesian: false,
		italian: false,
		jamaican: false,
		japanese: false,
		jewish: false,
		korean: false,
		mexican: false,
		polish: false,
		persian: false,
		portuguese: false,
		russian: false,
		spanish: false,
		thai: false,
		vietnamese: false,
	});
	const handleCarouseItemSelect = (selectedIndex, event) => {
		setCarouselIndex(selectedIndex);
	};
	useEffect(() => {
		setFormInfo((pre) => ({ ...pre, culinaryType }));
	}, [culinaryType]);
	return (
		<Carousel
			className='cuisines-types-carousel'
			interval={null}
			activeIndex={carouselIndex}
			onSelect={handleCarouseItemSelect}
		>
			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb1'
								name='american'
								checked={formInfo.culinaryType.american}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb1'>
								<div className='cuisine-types-container'>
									<Image src={AmericanCuisine} roundedCircle />
									<span>American</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb2'
								name='brazilian'
								checked={formInfo.culinaryType.brazilian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb2'>
								<div className='cuisine-types-container'>
									<Image src={BrazilianCuisine} roundedCircle />
									<span>Brazilian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb3'
								name='caribbean'
								checked={formInfo.culinaryType.caribbean}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb3'>
								<div className='cuisine-types-container'>
									<Image src={CaribbeanCuisine} roundedCircle />
									<span>Caribbean</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb4'
								name='chinese'
								checked={formInfo.culinaryType.chinese}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb4'>
								<div className='cuisine-types-container'>
									<Image src={ChineseCuisine} roundedCircle />
									<span>Chinese</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb5'
								name='english'
								checked={formInfo.culinaryType.english}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb5'>
								<div className='cuisine-types-container'>
									<Image src={EnglishCuisine} roundedCircle />
									<span>English</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb6'
								name='ethiopian'
								checked={formInfo.culinaryType.ethiopian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb6'>
								<div className='cuisine-types-container'>
									<Image src={EthiopianCuisine} roundedCircle />
									<span>Ethiopian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb7'
								name='french'
								checked={formInfo.culinaryType.french}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb7'>
								<div className='cuisine-types-container'>
									<Image src={FrenchCuisine} roundedCircle />
									<span>French</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb8'
								name='filipino'
								checked={formInfo.culinaryType.filipino}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb8'>
								<div className='cuisine-types-container'>
									<Image src={FilipinoCuisine} roundedCircle />
									<span>Filipino</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb9'
								name='georgian'
								checked={formInfo.culinaryType.georgian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb9'>
								<div className='cuisine-types-container'>
									<Image src={GeorgianCuisine} roundedCircle />
									<span>Georgian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb10'
								name='german'
								checked={formInfo.culinaryType.german}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb10'>
								<div className='cuisine-types-container'>
									<Image src={GermanCuisine} roundedCircle />
									<span>German</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb11'
								name='greek'
								checked={formInfo.culinaryType.greek}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb11'>
								<div className='cuisine-types-container'>
									<Image src={GreekCuisine} roundedCircle />
									<span>Greek</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb12'
								name='indian'
								checked={formInfo.culinaryType.indian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb12'>
								<div className='cuisine-types-container'>
									<Image src={IndianCuisine} roundedCircle />
									<span>Indian</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb13'
								name='indonesian'
								checked={formInfo.culinaryType.indonesian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb13'>
								<div className='cuisine-types-container'>
									<Image src={IndonesianCuisine} roundedCircle />
									<span>Indonesian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb14'
								name='italian'
								checked={formInfo.culinaryType.italian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb14'>
								<div className='cuisine-types-container'>
									<Image src={ItalianCuisine} roundedCircle />
									<span>Italian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb15'
								name='jamaican'
								checked={formInfo.culinaryType.jamaican}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb15'>
								<div className='cuisine-types-container'>
									<Image src={JamaicanCuisine} roundedCircle />
									<span>Jamaican</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb16'
								name='japanese'
								checked={formInfo.culinaryType.japanese}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb16'>
								<div className='cuisine-types-container'>
									<Image src={JapaneseCuisine} roundedCircle />
									<span>Japanese</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb17'
								name='jewish'
								checked={formInfo.culinaryType.jewish}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb17'>
								<div className='cuisine-types-container'>
									<Image src={JewishCuisine} roundedCircle />
									<span>Jewish</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb18'
								name='korean'
								checked={formInfo.culinaryType.korean}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb18'>
								<div className='cuisine-types-container'>
									<Image src={KoreanCuisine} roundedCircle />
									<span>Korean</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb19'
								name='mexican'
								checked={formInfo.culinaryType.mexican}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb19'>
								<div className='cuisine-types-container'>
									<Image src={MexicanCuisine} roundedCircle />
									<span>Mexican</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb20'
								name='polish'
								checked={formInfo.culinaryType.polish}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb20'>
								<div className='cuisine-types-container'>
									<Image src={PolishCuisine} roundedCircle />
									<span>Polish</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb21'
								name='persian'
								checked={formInfo.culinaryType.persian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb21'>
								<div className='cuisine-types-container'>
									<Image src={PersianCuisine} roundedCircle />
									<span>Persian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb22'
								name='portuguese'
								checked={formInfo.culinaryType.portuguese}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb22'>
								<div className='cuisine-types-container'>
									<Image src={PortugueseCuisine} roundedCircle />
									<span>Portuguese</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb23'
								name='russian'
								checked={formInfo.culinaryType.russian}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb23'>
								<div className='cuisine-types-container'>
									<Image src={RussianCuisine} roundedCircle />
									<span>Russian</span>
								</div>
							</label>
						</li>
						<li>
							<input
								disabled={edit}
								type='checkbox'
								id='cb24'
								name='spanish'
								checked={formInfo.culinaryType.spanish}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb24'>
								<div className='cuisine-types-container'>
									<Image src={SpanishCuisine} roundedCircle />
									<span>Spanish</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className='types-of-cuisines'>
					<ul className='types-of-cuisines-list'>
						<li>
							<input
								type='checkbox'
								id='cb25'
								name='thai'
								checked={formInfo.culinaryType.thai}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb25'>
								<div className='cuisine-types-container'>
									<Image src={ThaiCuisine} roundedCircle />
									<span>Thai</span>
								</div>
							</label>
						</li>
						<li>
							<input
								type='checkbox'
								id='cb26'
								name='vietnamese'
								checked={formInfo.culinaryType.vietnamese}
								onChange={(e) =>
									setCulinaryType((pre) => ({
										...pre,
										[e.target.name]: !culinaryType[e.target.name],
									}))
								}
							/>
							<label for='cb26'>
								<div className='cuisine-types-container'>
									<Image src={VietnameseCuisine} roundedCircle />
									<span>Vietnamese</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselTypesOfCuisines;
