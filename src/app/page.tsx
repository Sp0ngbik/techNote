import wrap from '@/assets/image/wrap.jpeg'
import {Card} from '@/components/card/card'

export default function Home() {
  const mock = [
    {
      date: '21.06.2020',
      heading: 'Как писать код быстро и безболезненно?',
      image: wrap,
      tag: 'создание сайтов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    },
    {
      date: '01.06.2020',
      heading: 'Купил новый ноутбук за 150 000 руб',
      image: wrap,
      tag: 'IT и технологии',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    },
    {
      date: '29.06.2020',
      heading: 'Привет пацанам с района',
      image: wrap,
      tag: 'IT и технологии',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    },
  ]

  return (
    <>
      {mock.map(card => {
        return (
          <Card
            date={card.date}
            heading={card.heading}
            image={card.image}
            key={card.date}
            tag={card.tag}
            text={card.text}
          />
        )
      })}
    </>
  )
}
