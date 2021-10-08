/*  
Embedder API : thư viện nhúng vào hook , có chức năng : 
    - Chứa dữ liệu của những eid , pid ....
    - Nó được lưu như là dữ liệu local - biến tĩnh 

Cách thức : 
    - Tổ chức trong 2 class : Asynclocalstorage - asyncResources 
    - 2 class kế thừa từ async_hooks

*/