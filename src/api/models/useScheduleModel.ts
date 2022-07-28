import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';

import { ScheduleInterface } from 'request';
import { apiRequest } from '../instance';
import { APIUrl } from '@/types/common';

const useScheduleModel = () => {
  const [schedule, setSchedule] = useState<ScheduleInterface[]>([]);

  const getSchedule = async () => {
    try {
      const scheduleResponse: AxiosResponse<ScheduleInterface[]> =
        await apiRequest.get<ScheduleInterface[]>(APIUrl.SCHEDULE);

      if (scheduleResponse) {
        setSchedule(scheduleResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchSchedule = async <T>(id: number, data: T) => {
    return await apiRequest.patch<T>(APIUrl.SCHEDULE, id, data);
  };

  const postSchedule = async <T>(data: T) => {
    try {
      await apiRequest.post<T>(APIUrl.SCHEDULE, data);
      alert('성공적으로 등록 되었습니다.');
    } catch (error) {
      alert('오류가 발생하였습니다. 관리자에게 문의 하세요.');
    }
  };

  const deleteSchedule = async (id: number) => {
    return await apiRequest.delete(APIUrl.SCHEDULE, id);
  };

  return {
    schedule,
    getSchedule,
    patchSchedule,
    postSchedule,
    deleteSchedule,
  };
};

export default useScheduleModel;
