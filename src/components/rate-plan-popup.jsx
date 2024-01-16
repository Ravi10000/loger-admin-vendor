import { Button, Modal, InputNumber } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import api from 'src/api';
import { updateApartment, updateHotel } from 'src/api/properties.req';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

function RatePlanPopup({
  isOpen,
  close,
  selectedPlan,
  propertyId,
  propertyType
}) {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(selectedPlan?.discount || 0);
  const queryClient = useQueryClient();
  const isHotel = propertyType === 'hotel';
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      let res = {};
      if (isHotel) {
        res = await updateHotel({ propertyId, [selectedPlan?.plan]: discount });
      } else {
        res = await updateApartment({
          propertyId,
          [selectedPlan?.plan]: discount
        });
      }
      console.log({ res });
      toast.success(
        selectedPlan?.discount
          ? 'Rate Plan Updated Successfully'
          : 'Rate Plan Added Successfully'
      );
      close();
      queryClient.invalidateQueries([
        isHotel ? 'hotel' : 'apartment',
        propertyId
      ]);
      navigate('?propertyId=' + propertyId + '&tab=rate-plans');
    },
    onError: err => console.log({ err })
  });

  return (
    <Modal
      title={selectedPlan?.title || 'Add New Plan'}
      open={isOpen}
      onCancel={close}
      cancelButtonProps={{ disabled: isPending }}
      footer={[
        <Button key="back" onClick={close} disabled={isPending}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={mutate}
          loading={isPending}
          disabled={isPending}
        >
          {selectedPlan?.title ? 'Update' : 'Save'}
        </Button>
      ]}
    >
      <p>{selectedPlan?.description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4 style={{ marginTop: '10px' }}>Discount Percentage</h4>
        {!!selectedPlan && (
          <InputNumber
            min={0}
            max={90}
            defaultValue={selectedPlan?.discount}
            onChange={setDiscount}
            size="large"
          />
        )}
      </div>
    </Modal>
  );
}

export default RatePlanPopup;
