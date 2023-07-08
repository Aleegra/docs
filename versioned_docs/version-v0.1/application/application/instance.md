---
sidebar_position: 2
---


# 应用实例

## 创建实例

1. 点击导航栏中的`应用管理`->`应用`，点击您需要创建实例的应用的名称，进入到应用详情页。
2. 在应用已经配置好模块的情况下，您可以直接点击点击`+`按钮，即可创建应用实例。在弹窗中，您可以选择修改应用实例的变量值，这些变量值会覆盖应用中的变量值。注意，这些变量值只会在该实例中生效，不会影响到应用配置中变量的默认值。并且这些变量需要在模块中配置，才能在应用实例中使用。
3. 点击`确定`按钮即可保存应用实例配置。您就可以在应用管理中使用这个应用实例了。新建的应用实例会在创建时自动执行部署操作。
4. 查看应用实例详情，点击`实例`对应的卡片，进入到应用实例的详情页面。卡片中会显示应用实例的基本信息，包括实例名称、实例状态、环境。
![overview](/img/application/app-instance.png)

## 查看实例

1. 在应用详情页面，点击`实例`对应的卡片，进入到应用实例的详情页面。
2. 在应用实例详情页面，您可以查看应用实例的部署记录、部署日志等。进行中的部署可以点击查看日志实时查看部署过程中的日志， 如果实例的部署状态为`部署失败`，您可以点击`查看日志`按钮，查看部署失败的原因。
3. 应用实例的资源如果存在可访问的 URL，您可以点击`入口`链接，直接访问应用实例的资源。

## 克隆实例

1. 在应用详情页面，选择需要克隆的应用实例卡片，在卡片右上角点击`…`按钮，选择`克隆`。
2. 在弹窗中输入新实例的名称。
3. 点击`确定`按钮，即可完成应用实例的克隆。

## 删除实例

在应用详情页面, 点击`实例`对应的卡片的更多操作按钮，选择`删除`，即可删除应用实例。在删除弹窗中，您可以选择是否删除应用实例的资源，如果选择删除资源，应用实例部署的资源也会被**删除**。如果选择不删除资源，应用实例部署的资源会保留，但是不会再被应用实例管理。
![overview](/img/application/app-instance-delete.png)

## 升级实例

在应用编辑页面，可以针对模块修改，如新增模块、删除模块、修改模块配置等，在完成修改后，点击`确定`按钮，然后点击`保存`按钮。选择需要升级的应用实例卡片，在卡片右上角点击`升级`按钮，即可完成应用实例的升级。
![overview](/img/application/app-instance-upgrade.png)

## 回滚实例

实例回滚操作会将应用实例回滚到指定的历史版本。您可以通过以下步骤进行实例回滚操作：
1. 点击导航栏中的`应用管理`->`应用`菜单进入到应用列表。
2. 找到您需要回滚的应用实例卡片，点击进入应用实例详情页。
3. 选择您需要回滚的历史版本，点击`回滚`选择实例回滚按钮。
4. 在弹窗中确认回滚操作的配置变更，点击`确定`按钮即可完成回滚操作。

回滚实例不会对应用造成影响，只会对应用实例造成影响。当前回滚操作只会回滚应用实例的资源，不会回滚应用实例的配置。如果您需要回滚应用实例的配置，可以通过[回滚应用](/docs/application/application#回滚应用)恢复应用的配置，然后重新升级应用实例来完成。

## 实例资源

在应用的详情页面，可以查看应用实例的资源，包括资源名称、资源类型、资源状态、模块、创建时间状态等。您可以根据需要对资源进行操作，如查看资源日志, 通过终端连接资源等。

### 查看资源信息

![overview](/img/application/app-instance-resource.png)

### 查看资源日志

![overview](/img/application/app-instance-resource-log.png)

### 通过终端连接资源

![overview](/img/application/app-instance-resource-exec.png)