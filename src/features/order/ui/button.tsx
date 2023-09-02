import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearConstructor } from '@/entities/constructor';
import { OrderModalContent, usePostOrderMutation } from '@/entities/order';
import { selectIsAuthenticated } from '@/entities/user';
import { cn, getApiError, useAppDispatch, useAppSelector } from '@/shared/lib';
import { constantsMap, navigationMap } from '@/shared/model';
import { Button, Loader, Modal, Paragraph } from '@/shared/ui';
import { useOrderDetails } from '../lib';

export const OrderButton: React.FC = () => {
  const { orderButton } = constantsMap.features.order;
  const { loadingText } = constantsMap.entities.order.modal;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { isOrderable, ingredientIds } = useOrderDetails();
  const [order, { data, isLoading, isError, error }] = usePostOrderMutation();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    order({ ingredients: ingredientIds }).unwrap();
    setShowModal(true);
  };
  return (
    <>
      <Button
        onClick={
          isAuthenticated ? handleClick : () => navigate(navigationMap.login)
        }
        disabled={!isOrderable || isLoading}
        className={cn(isLoading && 'animate-pulse')}
      >
        {orderButton}
      </Button>
      {showModal && (
        <Modal
          onClose={() => {
            dispatch(clearConstructor());
            setShowModal(false);
          }}
        >
          {isLoading && (
            <div className='flex flex-col gap-2 items-center'>
              <Loader />
              <Paragraph className='animate-pulse'>{loadingText}</Paragraph>
            </div>
          )}
          {isError && error && (
            <Paragraph variant='error'>{getApiError(error)}</Paragraph>
          )}
          {data && <OrderModalContent name={data.name} order={data.order} />}
        </Modal>
      )}
    </>
  );
};
