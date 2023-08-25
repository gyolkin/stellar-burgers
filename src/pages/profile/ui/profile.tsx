import { useGetMeQuery } from '@/entities/user';

export const ProfilePage = () => {
  const { data } = useGetMeQuery();
  return (
    <div>
      {data && (
        <div>
          <p>My Email: {data.email}</p>
          <p>My Name: {data.name}</p>
        </div>
      )}
    </div>
  );
};
