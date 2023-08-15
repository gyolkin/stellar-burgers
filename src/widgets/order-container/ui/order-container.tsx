import { ConstructorElement } from '@/entities/constructor';
import { useGetIngredientsQuery } from '@/entities/ingredient';
import { iconsMap } from '@/shared/model';
import { Button, FlexContainer, Paragraph } from '@/shared/ui';

export const OrderContainer = () => {
  // HARDCODE FOR TESTING::: REMOVE LATER!!
  const { data } = useGetIngredientsQuery();
  return (
    <FlexContainer
      variant='colStart'
      className='w-full lg:basis-1/2 justify-between lg:pt-10'
    >
      <FlexContainer variant='colStart' className='hidden lg:flex gap-2'>
        <ConstructorElement
          image='https://code.s3.yandex.net/react/code/bun-02.png'
          name='Top item name'
          price={1065}
          isLocked
          type='top'
        />
        <FlexContainer
          variant='colStart'
          className='gap-2 overflow-x-hidden overflow-y-auto scroll-smooth max-h-[40vh]'
        >
          {data?.data.map((item, index) => (
            <ConstructorElement
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </FlexContainer>
        <ConstructorElement
          image='https://code.s3.yandex.net/react/code/bun-02.png'
          name='Top item name'
          price={1065}
          isLocked
          type='bottom'
        />
      </FlexContainer>
      <FlexContainer variant='rowStart' className='justify-end p-2 lg:p-0'>
        <span className='inline-flex items-center gap-2 mr-5'>
          <Paragraph font='digits' size='large'>
            16555
          </Paragraph>
          <iconsMap.PriceIcon />
        </span>
        <Button>Заказать</Button>
      </FlexContainer>
      {/* <Heading className="hidden lg:block text-shadow text-center lg:pt-48">{constantsMap.texts.constructorAction}</Heading> */}
    </FlexContainer>
  );
};
