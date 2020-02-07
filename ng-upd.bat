CALL git commit -am "pre updates commit"
CALL ng update @angular/cli
CALL git commit -am "ng cli updates to latest"
CALL ng update @angular/core
CALL git commit -am "ng updates to latest"
CALL ng update @angular/material
CALL git commit -am "ng material to latest"
CALL npm audit fix
CALL git commit -am "post updates commit"
CALL bt.bat
