import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { apiRequest } from '@/api/instance';
import { ApiUrlEnum } from '@/@types/enum';
import { ScheduleInterface } from 'request';

const useScheduleModel = () => {
  const [schedules, setSchedules] = useState<ScheduleInterface[]>([]);

  const getScheduleData = async () => {
    try {
      const scheduleResponse: AxiosResponse<ScheduleInterface[]> =
        await apiRequest.get<ScheduleInterface[]>(ApiUrlEnum.SCHEDULE);

      if (scheduleResponse) {
        setSchedules(scheduleResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createtSchedule = async <T>(data: T) => {
    try {
      await apiRequest.post<T>(ApiUrlEnum.SCHEDULE, data);
      alert('성공적으로 등록 되었습니다.');
    } catch (error) {
      alert('오류가 발생하였습니다. 관리자에게 문의 하세요.');
    }
  };

  const deleteSchedule = async <T>(id: number) => {
    return await apiRequest.delete<T>(ApiUrlEnum.SCHEDULE, id);
  };

  return {
    schedules,
    getScheduleData,
    createtSchedule,
    deleteSchedule,
  };
};

export default useScheduleModel;
