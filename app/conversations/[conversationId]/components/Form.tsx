'use client';

import React from 'react';
import axios from 'axios';
import { useForm, FieldValues } from 'react-hook-form';
import { HiPhoto } from 'react-icons/hi2';
import { HiPaperAirplane } from 'react-icons/hi';
import { CldUploadButton } from 'next-cloudinary';
import useConversation from '@/app/hooks/useConversation';
import MessageInput from './MessageInput';

type Props = {}

const Form: React.FC<Props> = props => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    }
  });

  const onSubmit = async (data: FieldValues) => {
    setValue('message', '', { shouldValidate: true });
  
    axios.post('/api/messages', {
      ...data,
      conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result?.info?.url,
      conversationId,
    });
  }

  return (
    <div
      className='
        py-4
        px-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
      '
    >
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onSuccess={handleUpload}
        uploadPreset='ebrybz54'
      >
        <HiPhoto size={30} className='text-sky-500'/>
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='
          flex
          items-center
          gap-2
          lg:gap-4
          w-full
        '
      >
        <MessageInput
          id='message'
          register={register}
          errors={errors}
          required
          placeholder='Type a message...'
        />
        <button
          type='submit'
          className='
            rounded-full
            p-2
            bg-sky-500
            cursor-pointer
            hover:bg-sky-600
            transition
          '
        >
          <HiPaperAirplane size={30} className='text-white'/>
        </button>
      </form>
    </div>
  );
};

export default Form;Form