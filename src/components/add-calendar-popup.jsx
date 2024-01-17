import { Button, Modal, Input, Form } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import { toast } from 'react-hot-toast';

function AddCalendarModal({ isOpen, close, selectedCalendar, propertyId }) {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const queryClient = useQueryClient();
  const clean = () => {
    setName('');
    setUrl('');
    close();
  };
  useEffect(() => {
    setName(selectedCalendar?.name);
    setUrl(selectedCalendar?.url);
  }, [selectedCalendar]);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      let res = {};
      if (!name) return toast.error('Name is required');
      if (!url) return toast.error('URL is required');
      if (selectedCalendar) {
        res = await api.put(`/calendar-sync`, {
          calendarId: selectedCalendar._id,
          name,
          url
        });
      } else {
        res = await api.post(`/calendar-sync`, { propertyId, name, url });
      }
      if (res?.data?.status === 'success') {
        toast.success(selectedCalendar ? 'Calendar Updated' : 'Calendar Added');
        queryClient.invalidateQueries(['calendars', propertyId]);
        clean();
      }
    },
    onError: err => {
      toast.error('Something went wrong');
    }
  });
  return (
    <Modal
      open={isOpen}
      title={selectedCalendar ? 'Update Calendar' : 'Add Calendar'}
      onCancel={clean}
      footer={[
        <Button key="back" onClick={clean} disabled={isPending}>
          Cancel
        </Button>,
        <Button
          key="link"
          type="primary"
          disabled={isPending}
          loading={isPending}
          onClick={mutate}
          form="sync-calendar"
        >
          Save
        </Button>
      ]}
    >
      {!!selectedCalendar ? (
        <div>
          <h4>Name</h4>
          <Input
            size="large"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <h4>URL</h4>
          <Input
            size="large"
            placeholder="Url"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h4>Name</h4>
          <Input
            size="large"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <h4>URL</h4>
          <Input
            size="large"
            placeholder="Url"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
      )}
    </Modal>
  );
}

export default AddCalendarModal;
